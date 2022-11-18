import Ember from 'ember';
import SecurityAssignDataObject from '../objects/security-assign-data';
import SecurityAssignDataRowObject from '../objects/security-assign-data-row';
import SecurityAssignDataCellObject from '../objects/security-assign-data-cell';
import SecurityAssignRoleInheritanceDataCellObject from '../objects/security-assign-role-inheritance-data-cell';
import { Query } from 'ember-flexberry-data';
const { Builder, FilterOperator, SimplePredicate, ComplexPredicate, Condition } = Query;

export default Ember.Mixin.create({

  getAgentRoles(model, varName) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      let _this = this;
      let i18n = _this.get('i18n');
      let _userRoles = SecurityAssignDataObject.create({
        headers: [
          i18n.t('forms.i-c-s-soft-s-t-o-r-m-n-e-t-security-user-e.user-roles-name'),
          i18n.t('forms.i-c-s-soft-s-t-o-r-m-n-e-t-security-user-e.user-roles-own'),
          i18n.t('forms.i-c-s-soft-s-t-o-r-m-n-e-t-security-user-e.user-roles-inherit')
        ],
        rows: [],
        hasContent: false
      });
      _this.set(varName, _userRoles);
      let modelName = 'i-c-s-soft-s-t-o-r-m-n-e-t-security-agent';
      let modelNameLinks = 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role';

      let roleInheritancePredicate = 
        new ComplexPredicate(
          Condition.And, 
          new ComplexPredicate(
            Condition.And, 
            new SimplePredicate('role.isRole', FilterOperator.Eq, true), 
            new SimplePredicate('role.enabled', FilterOperator.Eq, true)), 
          new ComplexPredicate(
            Condition.And, 
            new SimplePredicate('agent.isRole', FilterOperator.Eq, true), 
            new SimplePredicate('agent.enabled', FilterOperator.Eq, true))); 

      let builder = new Builder(_this.store, modelNameLinks)
        .select('id, role.name, role.id, role.isRole, agent.name, agent.id, agent.isRole')
        .where(roleInheritancePredicate)
        .orderBy('role.name asc');

      let _roles;
      let _rolesInheritance;
      let _inheritanceProcessed = {};

      _this.store.query(modelNameLinks, builder.build()).then(function (rolesInheritance) {
        _rolesInheritance = rolesInheritance;
      }).catch(error => { reject(error); }).then(() => {
        let isRolePredicate = new SimplePredicate('isRole', FilterOperator.Eq, true);
        let enabledPredicate = new SimplePredicate('enabled', FilterOperator.Eq, true);

        // TODO: filter 'not model.id', 'not All users'.
        let predicate = new ComplexPredicate(Condition.And, isRolePredicate, enabledPredicate);
        builder = new Builder(_this.store, modelName)
          .select('id,name,isRole')
          .where(predicate)
          .orderBy('name asc');

        _this.store.query(modelName, builder.build()).then(function (roles) {
          _roles = roles;
        }).catch(error => { reject(error); }).then(() => {
          // Load LinkRoles for user.

          builder = new Builder(_this.store, modelNameLinks)
            .select('id,role.name,role.id')
            .where('agent', FilterOperator.Eq, model.get('id'))
            .orderBy('role.name asc');

          _this.store.query(modelNameLinks, builder.build()).then(function (linkRoles) {

            let processedOnBeforeStep = [];

            // Set empty array of parent roles for each role.
            _roles.forEach(role => {
              let roleId = Ember.get(role, 'id');
              _inheritanceProcessed[roleId] = [];
              processedOnBeforeStep.push(roleId);
            });

            // Get data from inheritance list and get first-level parents.
            _rolesInheritance.forEach(roleInheritance => {
              let fromId = Ember.get(roleInheritance, 'agent.id');
              let parentRoleId = Ember.get(roleInheritance, 'role.id');

              if (fromId in _inheritanceProcessed) {
                _inheritanceProcessed[fromId].push(parentRoleId);
              }
            });

            let counter = 0;
            let iterationMax = _roles.content.length;
            
            // If counter >= iterationMax then there is a circle inheritance.
            // processedOnBeforeStep - changed on before step inheritance lists, so it is needed to add to child roles new info.
            while(counter < iterationMax && processedOnBeforeStep.length > 0) {
              // There are not so many inheritances in reality so it is not too long.
              let processedOnCurrentStep = [];
              let iMax = processedOnBeforeStep.length;
              let innerKeys = Object.keys(_inheritanceProcessed);
              for (let i = 0; i < iMax; i++) {
                let inheritanceKey = processedOnBeforeStep[i];
                let inheritance = _inheritanceProcessed[inheritanceKey];
                if (inheritance.length > 0)
                {
                  innerKeys.forEach((inheritanceAddKey) => {
                    if (inheritanceKey != inheritanceAddKey)
                    {
                      let inheritanceAdd = _inheritanceProcessed[inheritanceAddKey];
                      if (inheritanceAdd.includes(inheritanceKey))
                      {
                        _inheritanceProcessed[inheritanceAddKey] = inheritanceAdd.concat(inheritance);
                        processedOnCurrentStep.push(inheritanceAddKey);
                      }
                    }
                  });
                }
              }

              processedOnBeforeStep = processedOnCurrentStep;
              counter++;
            }

            // Remove dublicates on lists of parents.
            for (let inheritanceKey in _inheritanceProcessed)
            {
              let inheritance = _inheritanceProcessed[inheritanceKey];
              _inheritanceProcessed[inheritanceKey] = inheritance.filter((item,index)=>{
                  return (inheritance.indexOf(item) == index)
              });
            }

            // Create cells associated with roles.
            let rolesList = {};
            _roles.forEach(role => {
              let roleName = Ember.get(role, 'name');
              let roleId = Ember.get(role, 'id');
              let ownCellObject;
              let inheritCellObject = SecurityAssignRoleInheritanceDataCellObject.create({ readonly: true, model: null, inited: true, linkedRoles: [] });
              linkRoles.forEach(linkRole => {
                if (roleName === linkRole.get('role.name')) {
                  ownCellObject = SecurityAssignDataCellObject.create({ checked: true, readonly: false, model: linkRole, inited: true });
                }
              });

              if (!ownCellObject) {
                ownCellObject = SecurityAssignDataCellObject.create({ checked: false, readonly: false, model: null, inited: true });
              }

              rolesList[roleId] = [ownCellObject, inheritCellObject];
            });

            // Init connections between parent roles and roles.
            _roles.forEach(role => {
              let roleId = Ember.get(role, 'id');
              let inheritanceData = _inheritanceProcessed[roleId];
              if (inheritanceData != null) {
                inheritanceData.forEach((inheritance) => {
                  if (inheritance in rolesList){
                    Ember.get(rolesList[inheritance][1], 'linkedRoles').push(rolesList[roleId][0]);
                  }
                });
              }
            });

            // Set inited cells to datarows.
            _roles.forEach(role => {
              let roleId = Ember.get(role, 'id');
              let roleName = role.get('name');
              let currentRoleCells = rolesList[roleId];

              _userRoles.rows.push(SecurityAssignDataRowObject.create({
                name: roleName,
                columns: currentRoleCells,
                model: role
              }));
              _userRoles.hasContent = true;
            });

            resolve();
          }).catch(error => { reject(error); });
        });
      });
    });
  },
});
