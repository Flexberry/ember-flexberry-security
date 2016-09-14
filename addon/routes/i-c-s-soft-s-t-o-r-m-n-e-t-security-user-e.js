import Ember from 'ember';
import EditFormRoute from 'ember-flexberry/routes/edit-form';
import SecurityAssignDataObject from '../objects/security-assign-data';
import SecurityAssignDataRowObject from '../objects/security-assign-data-row';
import SecurityAssignDataCellObject from '../objects/security-assign-data-cell';
import typeAccess from '../enums/i-c-s-soft-s-t-o-r-m-n-e-t-security-t-type-access';
import { Query } from 'ember-flexberry-data';
const { Builder, FilterOperator, SimplePredicate, ComplexPredicate, Condition } = Query;

export default EditFormRoute.extend({
  modelProjection: 'UserE',
  modelName: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-agent',

  userRoles: null,
  userGroups: null,
  userClasses: null,
  userOperations: null,

  /**
    A hook you can implement to convert the URL into the model for this route.
    [More info](http://emberjs.com/api/classes/Ember.Route.html#method_model).

    @method model
    @param {Object} params
    @param {Object} transition
   */
  model() {
    return this._super.apply(this, arguments).then((model) =>
      Ember.RSVP.all([
        this._getUserRoles(model),
        this._getUserGroups(model),
        this._getUserClasses(model),
        this._getUserOperations(model)
      ]).then(() => model)
    );
  },

  /**
    A hook you can use to setup the controller for the current route.
    [More info](http://emberjs.com/api/classes/Ember.Route.html#method_setupController).

    @method setupController
    @param {Ember.Controller} controller
    @param {Object} model
  */
  setupController(controller) {
    this._super(...arguments);
    controller.set('userRoles', this.userRoles);
    controller.set('userGroups', this.userGroups);
    controller.set('userClasses', this.userClasses);
    controller.set('userOperations', this.userOperations);
  },

  //TODO: move it to mixin
  _getUserRoles(model) {
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
      _this.set('userRoles', _userRoles);
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

  _getUserGroups(model) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      let _this = this;
      let i18n = _this.get('i18n');
      let _userGroups = SecurityAssignDataObject.create({
        headers: [
          i18n.t('forms.i-c-s-soft-s-t-o-r-m-n-e-t-security-user-e.user-groups-name'),
          i18n.t('forms.i-c-s-soft-s-t-o-r-m-n-e-t-security-user-e.user-groups-assign')
        ],
        rows: [],
        hasContent: false
      });
      _this.set('userGroups', _userGroups);
      let modelName = 'i-c-s-soft-s-t-o-r-m-n-e-t-security-agent';

      let isGroupPredicate = new SimplePredicate('isGroup', FilterOperator.Eq, true);
      let enabledPredicate = new SimplePredicate('enabled', FilterOperator.Eq, true);
      let predicate = new ComplexPredicate(Condition.And, isGroupPredicate, enabledPredicate);

      let builder = new Builder(_this.store, modelName)
        .select('id,name,isGroup')
        .where(predicate)
        .orderBy('name asc');

      let _groups;

      _this.store.query(modelName, builder.build()).then(function (groups) {
        _groups = groups;
      }).catch(error => { reject(error); }).then(() => {
        // Load LinkGroups for user.
        modelName = 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group';
        builder = new Builder(_this.store, modelName)
          .select('id,group.name')
          .where('user', FilterOperator.Eq, model.get('id'))
          .orderBy('group.name asc');

        _this.store.query(modelName, builder.build()).then(function (linkGroups) {

          _groups.forEach(group => {
            let groupName = group.get('name');
            let cellObject;
            linkGroups.forEach(linkGroup => {
              if (groupName === linkGroup.get('group.name')) {
                cellObject = SecurityAssignDataCellObject.create({ checked: true, readonly: false, model: linkGroup, inited: true });
              }
            });

            if (!cellObject) {
              cellObject = SecurityAssignDataCellObject.create({ checked: false, readonly: false, model: null, inited: true });
            }

            _userGroups.rows.push(SecurityAssignDataRowObject.create({
              name: groupName,
              columns: [cellObject],
              model: group
            }));
            _userGroups.hasContent = true;
          });

          resolve();
        }).catch(error => { reject(error); });
      });
    });
  },

  _getUserClasses(model) {
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
      _this.set('userClasses', _userClasses);
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
  },

  _getUserOperations(model) {
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
      _this.set('userOperations', _userOperations);
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
