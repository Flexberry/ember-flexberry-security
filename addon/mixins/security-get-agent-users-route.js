import Mixin from '@ember/object/mixin';
import Promise from 'rsvp';
import SecurityAssignDataObject from '../objects/security-assign-data';
import SecurityAssignDataRowObject from '../objects/security-assign-data-row';
import SecurityAssignDataCellObject from '../objects/security-assign-data-cell';
import Builder from 'ember-flexberry-data/query/builder';
import FilterOperator from 'ember-flexberry-data/query/filter-operator';
import Condition from 'ember-flexberry-data/query/condition';
import { SimplePredicate, ComplexPredicate } from 'ember-flexberry-data/query/predicate';

export default Mixin.create({
  getAgentUsers(model, varName) {
    return new Promise((resolve, reject) => {
      let _this = this;
      let i18n = _this.get('i18n');
      let _roleUsers = SecurityAssignDataObject.create({
        headers: [
          i18n.t('forms.i-c-s-soft-s-t-o-r-m-n-e-t-security-role-e.role-users-name'),
          i18n.t('forms.i-c-s-soft-s-t-o-r-m-n-e-t-security-role-e.role-users-assign')
        ],
        rows: [],
        hasContent: false
      });
      _this.set(varName, _roleUsers);
      let modelName = 'i-c-s-soft-s-t-o-r-m-n-e-t-security-agent';

      let isRolePredicate = new SimplePredicate('isUser', FilterOperator.Eq, true);
      let enabledPredicate = new SimplePredicate('enabled', FilterOperator.Eq, true);
      let predicate = new ComplexPredicate(Condition.And, isRolePredicate, enabledPredicate);

      let builder = new Builder(_this.store, modelName)
        .select('id,name,isUser')
        .where(predicate)
        .orderBy('name asc');
      let _users;

      _this.store.query(modelName, builder.build()).then(function (users) {
        _users = users;
      }).catch(error => { reject(error); }).then(() => {
        // Load LinkRoles for user.
        modelName = 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role';
        builder = new Builder(_this.store, modelName)
          .select('id,role,agent,agent.name')
          .where('role', FilterOperator.Eq, model.get('id'))
          .orderBy('agent.name asc');

        _this.store.query(modelName, builder.build()).then(function (linkRoles) {

          _users.forEach(user => {
            let userId = user.get('id');
            let ownCellObject;
            linkRoles.forEach(linkRole => {
              if (userId === linkRole.get('agent.id')) {
                ownCellObject = SecurityAssignDataCellObject.create({ checked: true, readonly: false, model: linkRole, inited: true });
              }
            });

            if (!ownCellObject) {
              ownCellObject = SecurityAssignDataCellObject.create({ checked: false, readonly: false, model: null, inited: true });
            }

            _roleUsers.rows.push(SecurityAssignDataRowObject.create({
              name: user.get('name'),
              columns: [ownCellObject],
              model: user
            }));
            _roleUsers.hasContent = true;
          });

          resolve();
        }).catch(error => { reject(error); });
      });
    });
  }
});
