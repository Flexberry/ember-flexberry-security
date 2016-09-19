import Ember from 'ember';
import SecurityAssignDataObject from '../objects/security-assign-data';
import SecurityAssignDataRowObject from '../objects/security-assign-data-row';
import SecurityAssignDataCellObject from '../objects/security-assign-data-cell';
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

      let isRolePredicate = new SimplePredicate('isRole', FilterOperator.Eq, true);
      let enabledPredicate = new SimplePredicate('enabled', FilterOperator.Eq, true);
      let predicate = new ComplexPredicate(Condition.And, isRolePredicate, enabledPredicate);

      let builder = new Builder(_this.store, modelName)
        .select('id,name,isRole')
        .where(predicate)
        .orderBy('name asc');
      let _roles;

      _this.store.query(modelName, builder.build()).then(function (roles) {
        _roles = roles;
      }).catch(error => { reject(error); }).then(() => {
        // Load LinkRoles for user.
        modelName = 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role';
        builder = new Builder(_this.store, modelName)
          .select('id,role.name')
          .where('agent', FilterOperator.Eq, model.get('id'))
          .orderBy('role.name asc');

        _this.store.query(modelName, builder.build()).then(function (linkRoles) {

          _roles.forEach(role => {
            let roleName = role.get('name');
            let ownCellObject;
            let inheritCellObject = SecurityAssignDataCellObject.create({ checked: false, readonly: true, model: null, inited: true });
            linkRoles.forEach(linkRole => {
              if (roleName === linkRole.get('role.name')) {
                ownCellObject = SecurityAssignDataCellObject.create({ checked: true, readonly: false, model: linkRole, inited: true });
              }
            });

            if (!ownCellObject) {
              ownCellObject = SecurityAssignDataCellObject.create({ checked: false, readonly: false, model: null, inited: true });
            }

            _userRoles.rows.push(SecurityAssignDataRowObject.create({
              name: roleName,
              columns: [ownCellObject, inheritCellObject],
              model: role
            }));
            _userRoles.hasContent = true;
          });

          resolve();
        }).catch(error => { reject(error); });
      });
    });
  },
});
