import Ember from 'ember';
import SecurityAssignDataObject from '../objects/security-assign-data';
import SecurityAssignDataRowObject from '../objects/security-assign-data-row';
import SecurityAssignDataCellObject from '../objects/security-assign-data-cell';
import { Query } from 'ember-flexberry-data';
const { Builder, FilterOperator, SimplePredicate, ComplexPredicate, Condition } = Query;

export default Ember.Mixin.create({
  getAgentOperations(model, varName) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      let _this = this;
      let i18n = _this.get('i18n');
      let _userOperations = SecurityAssignDataObject.create({
        headers: [
          i18n.t('forms.i-c-s-soft-s-t-o-r-m-n-e-t-security-user-e.user-operations-name'),
          i18n.t('forms.i-c-s-soft-s-t-o-r-m-n-e-t-security-user-e.user-operations-assign'),
        ],
        rows: [],
        hasContent: false
      });
      _this.set(varName, _userOperations);
      let modelName = 'i-c-s-soft-s-t-o-r-m-n-e-t-security-subject';
      let builder = new Builder(_this.store, modelName)
        .select('id,name,isOperation')
        .where('isOperation', FilterOperator.Eq, true)
        .orderBy('name asc');
      let _operations;

      _this.store.query(modelName, builder.build()).then(function (operations) {
        _operations = operations;
      }).catch(error => { reject(error); }).then(() => {
        // Load Permissions for user.
        modelName = 'i-c-s-soft-s-t-o-r-m-n-e-t-security-permition';
        let isOperationPredicate = new SimplePredicate('subject.isOperation', FilterOperator.Eq, true);
        let agentIdPredicate = new SimplePredicate('agent', FilterOperator.Eq, model.get('id'));
        let predicate = new ComplexPredicate(Condition.And, isOperationPredicate, agentIdPredicate);
        builder = new Builder(_this.store, modelName)
          .selectByProjection('CheckAccessOperation')
          .where(predicate)
          .orderBy('subject.name asc');

        _this.store.query(modelName, builder.build()).then(function (permissions) {
          _operations.forEach(operation => {
            let operationName = operation.get('name');
            let cellObject;

            permissions.forEach(permission => {
              if (operationName === permission.get('subject.name')) {
                cellObject = SecurityAssignDataCellObject.create({ checked: true, readonly: false, model: permission, inited: true });
              }
            });

            if (!cellObject) {
              cellObject = SecurityAssignDataCellObject.create({ checked: false, readonly: false, model: null, inited: true });
            }

            _userOperations.rows.push(SecurityAssignDataRowObject.create({
              name: operationName,
              columns: [cellObject],
              model: operation
            }));
            _userOperations.hasContent = true;
          });

          resolve();
        }).catch(error => { reject(error); });
      });
    });
  }
});
