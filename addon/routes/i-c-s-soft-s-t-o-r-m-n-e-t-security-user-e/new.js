import Ember from 'ember';
import EditFormNewRoute from 'ember-flexberry/routes/edit-form-new';
import SecurityUserERouteMixin from '../../mixins/security-user-e-route';

export default EditFormNewRoute.extend(SecurityUserERouteMixin, {
  modelProjection: 'UserE',
  modelName: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-agent',
  templateName: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-user-e',

  afterModel: function(model) {
    return new Ember.RSVP.Promise((resolve, reject) => {

      model.set('isUser', true);
      model.set('isGroup', false);
      model.set('isRole', false);
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
