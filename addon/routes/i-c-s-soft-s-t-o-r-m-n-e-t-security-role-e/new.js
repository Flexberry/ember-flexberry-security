import { Promise } from 'rsvp';
import EditFormNewRoute from 'ember-flexberry/routes/edit-form-new';
import SecurityRoleERouteMixin from '../../mixins/security-role-e-route';

export default EditFormNewRoute.extend(SecurityRoleERouteMixin, {
  modelProjection: 'RoleOrGroupE',
  modelName: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-agent',
  templateName: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-role-e',

  afterModel: function(model) {
    return new Promise((resolve, reject) => {

      model.set('isUser', false);
      model.set('isGroup', false);
      model.set('isRole', true);
      model.set('enabled', true);

      this.fillData(model).then(()=> { resolve(); }).catch(error => { reject(error); });
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
    this.setControllerVariables(controller);
  }
});
