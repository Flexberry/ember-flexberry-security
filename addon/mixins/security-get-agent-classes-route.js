import Ember from 'ember';
import SecurityAssignDataObject from '../objects/security-assign-data';
import SecurityAssignDataRowObject from '../objects/security-assign-data-row';
import SecurityAssignDataCellObject from '../objects/security-assign-data-cell';
import typeAccess from '../enums/i-c-s-soft-s-t-o-r-m-n-e-t-security-t-type-access';
import { Query } from 'ember-flexberry-data';
const { Builder, FilterOperator, SimplePredicate, ComplexPredicate, Condition } = Query;

export default Ember.Mixin.create({
  getAgentClasses(model, varName) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      let _this = this;
      let i18n = _this.get('i18n');
      let _userClasses = SecurityAssignDataObject.create({
        headers: [
          i18n.t('forms.i-c-s-soft-s-t-o-r-m-n-e-t-security-user-e.user-classes-name'),
          i18n.t('forms.i-c-s-soft-s-t-o-r-m-n-e-t-security-user-e.user-classes-full'),
          i18n.t('forms.i-c-s-soft-s-t-o-r-m-n-e-t-security-user-e.user-classes-read'),
          i18n.t('forms.i-c-s-soft-s-t-o-r-m-n-e-t-security-user-e.user-classes-insert'),
          i18n.t('forms.i-c-s-soft-s-t-o-r-m-n-e-t-security-user-e.user-classes-update'),
          i18n.t('forms.i-c-s-soft-s-t-o-r-m-n-e-t-security-user-e.user-classes-delete'),
          i18n.t('forms.i-c-s-soft-s-t-o-r-m-n-e-t-security-user-e.user-classes-execute')
        ],
        rows: [],
        hasContent: false
      });
      _this.set(varName, _userClasses);
      let modelName = 'i-c-s-soft-s-t-o-r-m-n-e-t-security-subject';
      let builder = new Builder(_this.store, modelName)
        .select('id,name,isClass')
        .where('isClass', FilterOperator.Eq, true)
        .orderBy('name asc');
      let _classes;

      _this.store.query(modelName, builder.build()).then(function (classes) {
        _classes = classes;
      }).catch(error => { reject(error); }).then(() => {
        // Load Permissions for user.
        modelName = 'i-c-s-soft-s-t-o-r-m-n-e-t-security-permition';

        let isClassPredicate = new SimplePredicate('subject.isClass', FilterOperator.Eq, true);
        let agentIdPredicate = new SimplePredicate('agent', FilterOperator.Eq, model.get('id'));
        let predicate = new ComplexPredicate(Condition.And, isClassPredicate, agentIdPredicate);

        builder = new Builder(_this.store, modelName)
          .selectByProjection('Sec_CheckClassesAndGetDetails')
          .where(predicate)
          .orderBy('subject.name asc');

        _this.store.query(modelName, builder.build()).then(function (permissions) {
          _classes.forEach(cls => {
            let className = cls.get('name');
            let cellObjectFull;
            let cellObjectRead;
            let cellObjectInsert;
            let cellObjectUpdate;
            let cellObjectDelete;
            let cellObjectExecute;
            let rowPermission;
            permissions.forEach(permission => {
              if (className === permission.get('subject.name')) {
                let accesses = permission.get('access');
                rowPermission = permission;
                accesses.forEach(access => {
                  switch (access.get('typeAccess')) {
                    case 'Full':
                      cellObjectFull = SecurityAssignDataCellObject.create({
                        checked: true, readonly: false, model: access, inited: true, operation: typeAccess.Full
                      });
                      break;
                    case 'Read':
                      cellObjectRead = SecurityAssignDataCellObject.create({
                        checked: true, readonly: false, model: access, inited: true, operation: typeAccess.Read
                      });
                      break;
                    case 'Insert':
                      cellObjectInsert = SecurityAssignDataCellObject.create({
                        checked: true, readonly: false, model: access, inited: true, operation: typeAccess.Insert
                      });
                      break;
                    case 'Update':
                      cellObjectUpdate = SecurityAssignDataCellObject.create({
                        checked: true, readonly: false, model: access, inited: true, operation: typeAccess.Update
                      });
                      break;
                    case 'Delete':
                      cellObjectDelete = SecurityAssignDataCellObject.create({
                        checked: true, readonly: false, model: access, inited: true, operation: typeAccess.Delete
                      });
                      break;
                    case 'Execute':
                      cellObjectExecute = SecurityAssignDataCellObject.create({
                        checked: true, readonly: false, model: access, inited: true, operation: typeAccess.Execute
                      });
                      break;
                  }
                });
              }
            });

            if (!cellObjectFull) {
              cellObjectFull = SecurityAssignDataCellObject.create({
                checked: false, readonly: false, model: null, inited: true, operation: typeAccess.Full
              });
            }

            if (!cellObjectRead) {
              cellObjectRead = SecurityAssignDataCellObject.create({
                checked: false, readonly: false, model: null, inited: true, operation: typeAccess.Read
              });
            }

            if (!cellObjectInsert) {
              cellObjectInsert = SecurityAssignDataCellObject.create({
                checked: false, readonly: false, model: null, inited: true, operation: typeAccess.Insert
              });
            }

            if (!cellObjectUpdate) {
              cellObjectUpdate = SecurityAssignDataCellObject.create({
                checked: false, readonly: false, model: null, inited: true, operation: typeAccess.Update
              });
            }

            if (!cellObjectDelete) {
              cellObjectDelete = SecurityAssignDataCellObject.create({
                checked: false, readonly: false, model: null, inited: true, operation: typeAccess.Delete
              });
            }

            if (!cellObjectExecute) {
              cellObjectExecute = SecurityAssignDataCellObject.create({
                checked: false, readonly: false, model: null, inited: true, operation: typeAccess.Execute
              });
            }

            _userClasses.rows.push(SecurityAssignDataRowObject.create({
              name: className,
              columns: [
                cellObjectFull,
                cellObjectRead,
                cellObjectInsert,
                cellObjectUpdate,
                cellObjectDelete,
                cellObjectExecute
                ],
              model: cls,
              permission: rowPermission
            }));
            _userClasses.hasContent = true;
          });
          resolve();
        }).catch(error => { reject(error); });
      });
    });
  }
});
