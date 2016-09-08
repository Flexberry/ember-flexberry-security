import Ember from 'ember';
import EditFormRoute from 'ember-flexberry/routes/edit-form';
import SecurityAssignDataObject from '../objects/security-assign-data';
import { Query } from 'ember-flexberry-data';
const { Builder, FilterOperator } = Query;

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
    return this._super.apply(this, arguments).then((model) => {
        return Ember.RSVP.all([
          this._getUserRoles(model),
          this._getUserGroups(model),
          this._getUserClasses(model),
          this._getUserOperations(model)
          ]).then(() => model);
      });
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

  _getUserRoles(model) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      let _this = this;
      let _userRoles = SecurityAssignDataObject.create({
        headers: ['Наименование', 'Своё', 'Унаследовано'],
        rows: [],
        hasContent: false
      });
      _this.set('userRoles', _userRoles);
      let modelName = 'i-c-s-soft-s-t-o-r-m-n-e-t-security-agent';

      // TODO: exclude enabled=false roles.
      let builder = new Builder(_this.store, modelName).select('id,name,isRole').where('isRole', FilterOperator.Eq, true).orderBy('name asc');

      _this.store.query(modelName, builder.build()).then(function(roles) {
        roles.forEach(role => {
          _userRoles.rows.push({
            name: role.get('name'),
            columns: [{ checked: false, readonly: false },
              { checked: false, readonly: true },
            ]
          });
          _userRoles.hasContent = true;
        });

      }).catch(error => {reject(error);}).then(()=> {
        // Load LinkRoles for user.
        modelName = 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role';
        builder = new Builder(_this.store, modelName)
        //.select('id,role.name') //TODO: Fix loads by select and delete next line.
        .selectByProjection('Sec_LinkRoleL')
        .where('agent', FilterOperator.Eq, model.get('id')).orderBy('role.name asc');
        _this.store.query(modelName, builder.build()).then(function(linkRoles) {
          linkRoles.forEach(linkRole => {
            _userRoles.rows.forEach(row => {
              if (row.name === linkRole.get('role.name')) {
                row.columns[0].checked = true;
              }
            });
            _userRoles.hasContent = true;
          });
          resolve();
        }).catch(error => {reject(error);});
      });
    });
  },

  _getUserGroups(model) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      let modelName = 'i-c-s-soft-s-t-o-r-m-n-e-t-security-agent';
      let builder = new Builder(this.store, modelName).where('isGroup', FilterOperator.Eq, true);

      this.store.query(modelName, builder.build()).then(function(roles) {
      resolve();
      }).catch(error => {reject(error);});
    });
  },

  _getUserClasses(model) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      let modelName = 'i-c-s-soft-s-t-o-r-m-n-e-t-security-subject';
      let builder = new Builder(this.store, modelName).where('isClass', FilterOperator.Eq, true);

      this.store.query(modelName, builder.build()).then(function(roles) {
      resolve();
      }).catch(error => {reject(error);});
    });
  },

  _getUserOperations(model) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      let modelName = 'i-c-s-soft-s-t-o-r-m-n-e-t-security-subject';
      let builder = new Builder(this.store, modelName).where('isOperation', FilterOperator.Eq, true);

      this.store.query(modelName, builder.build()).then(function(roles) {
      resolve();
      }).catch(error => {reject(error);});
    });
  }
});
