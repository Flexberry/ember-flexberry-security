import Ember from 'ember';
import EditFormRoute from 'ember-flexberry/routes/edit-form';
import SecurityAssignDataObject from '../objects/security-assign-data';
import SecurityAssignDataCellObject from '../objects/security-assign-data-cell';
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
        // TODO: translate it.
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

      let isRolePredicate = new SimplePredicate('isRole', FilterOperator.Eq,  true);
      let enabledPredicate = new SimplePredicate('enabled', FilterOperator.Eq,  true);
      let predicate = new ComplexPredicate(Condition.And, isRolePredicate, enabledPredicate);

      let builder = new Builder(_this.store, modelName)
        .select('id,name,isRole')
        .where(predicate)
        .orderBy('name asc');

      _this.store.query(modelName, builder.build()).then(function (roles) {
        roles.forEach(role => {
          _userRoles.rows.push({
            name: role.get('name'),
            columns: [
              SecurityAssignDataCellObject.create({ checked: false, readonly: false, model: null }),
              SecurityAssignDataCellObject.create({ checked: false, readonly: true, model: null })
            ]
          });
          _userRoles.hasContent = true;
        });

      }).catch(error => { reject(error); }).then(() => {
        // Load LinkRoles for user.
        modelName = 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role';
        builder = new Builder(_this.store, modelName)

          //.select('id,role.name') //TODO: Fix loads by select and delete next line.
          .selectByProjection('Sec_LinkRoleL')
          .where('agent', FilterOperator.Eq,  model.get('id'))
          .orderBy('role.name asc');

        _this.store.query(modelName, builder.build()).then(function (linkRoles) {
          linkRoles.forEach(linkRole => {
            _userRoles.rows.forEach(row => {
              if (row.name === linkRole.get('role.name')) {
                row.columns[0].set('checked', true);
                row.columns[0].set('model', linkRole);
              }
            });
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

      let isGroupPredicate = new SimplePredicate('isGroup', FilterOperator.Eq,  true);
      let enabledPredicate = new SimplePredicate('enabled', FilterOperator.Eq,  true);
      let predicate = new ComplexPredicate(Condition.And, isGroupPredicate, enabledPredicate);

      let builder = new Builder(_this.store, modelName)
        .select('id,name,isGroup')
        .where(predicate)
        .orderBy('name asc');

      _this.store.query(modelName, builder.build()).then(function (groups) {

        groups.forEach(group => {
          _userGroups.rows.push({
            name: group.get('name'),
            columns: [{ checked: false, readonly: false }
            ]
          });
          _userGroups.hasContent = true;
        });

      }).catch(error => { reject(error); }).then(() => {
        // Load LinkGroups for user.
        modelName = 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group';
        builder = new Builder(_this.store, modelName)

          //.select('id,group.name') //TODO: Fix loads by select and delete next line.
          .selectByProjection('Sec_LinkGroupL')
          .where('user', FilterOperator.Eq,  model.get('id'))
          .orderBy('group.name asc');

        _this.store.query(modelName, builder.build()).then(function (linkGroups) {
          linkGroups.forEach(linkGroup => {
            _userGroups.rows.forEach(row => {
              if (row.name === linkGroup.get('group.name')) {
                row.columns[0].checked = true;
              }
            });
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
        .where('isClass', FilterOperator.Eq,  true)
        .orderBy('name asc');

      _this.store.query(modelName, builder.build()).then(function (classes) {
        classes.forEach(cls => {
          _userClasses.rows.push({
            name: cls.get('name'),
            columns: [
              { checked: false, readonly: false },
              { checked: false, readonly: false },
              { checked: false, readonly: false },
              { checked: false, readonly: false },
              { checked: false, readonly: false },
              { checked: false, readonly: false }
            ]
          });
          _userClasses.hasContent = true;
        });

        resolve();
      }).catch(error => { reject(error); }).then(() => {
        // Load Permissions for user.
        modelName = 'i-c-s-soft-s-t-o-r-m-n-e-t-security-permition';

        let isClassPredicate = new SimplePredicate('subject.isClass', FilterOperator.Eq,  true);
        let agentIdPredicate = new SimplePredicate('agent', FilterOperator.Eq,  model.get('id'));
        let predicate = new ComplexPredicate(Condition.And, isClassPredicate, agentIdPredicate);

        builder = new Builder(_this.store, modelName)
          .selectByProjection('Sec_CheckClassesAndGetDetails')
          .where(predicate)
          .orderBy('subject.name asc');

        _this.store.query(modelName, builder.build()).then(function (permissions) {
          permissions.forEach(permission => {
            _userClasses.rows.forEach(row => {
              if (row.name === permission.get('subject.name')) {
                let accesses = permission.get('access');
                accesses.forEach(access => {
                  switch (access.get('typeAccess')) {
                    case 'Full': row.columns[0].checked = true; break;
                    case 'Read': row.columns[1].checked = true; break;
                    case 'Insert': row.columns[2].checked = true; break;
                    case 'Update': row.columns[3].checked = true; break;
                    case 'Delete': row.columns[4].checked = true; break;
                    case 'Execute': row.columns[5].checked = true; break;
                  }
                });
              }
            });
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
        .where('isOperation', FilterOperator.Eq,  true)
        .orderBy('name asc');

      _this.store.query(modelName, builder.build()).then(function (operations) {
        operations.forEach(operation => {
          _userOperations.rows.push({
            name: operation.get('name'),
            columns: [
              { checked: false, readonly: false }
            ]
          });
          _userOperations.hasContent = true;
        });
      }).catch(error => { reject(error); }).then(() => {
        // Load Permissions for user.
        modelName = 'i-c-s-soft-s-t-o-r-m-n-e-t-security-permition';
        let isOperationPredicate = new SimplePredicate('subject.isOperation', FilterOperator.Eq,  true);
        let agentIdPredicate = new SimplePredicate('agent', FilterOperator.Eq,  model.get('id'));
        let predicate = new ComplexPredicate(Condition.And, isOperationPredicate, agentIdPredicate);
        builder = new Builder(_this.store, modelName)
          .selectByProjection('CheckAccessOperation')
          .where(predicate)
          .orderBy('subject.name asc');

        _this.store.query(modelName, builder.build()).then(function (permissions) {
          permissions.forEach(permission => {
            _userOperations.rows.forEach(row => {
              if (row.name === permission.get('subject.name')) {
                row.columns[0].checked = true;
              }
            });
          });
          resolve();
        }).catch(error => { reject(error); });
      });
    });
  }
});
