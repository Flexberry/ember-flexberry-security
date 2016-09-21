import EditFormRoute from 'ember-flexberry/routes/edit-form';
import SecurityUserERouteMixin from '../mixins/security-user-e-route';

export default EditFormRoute.extend(SecurityUserERouteMixin, {
  modelProjection: 'UserE',
  modelName: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-agent',

  /**
    A hook you can implement to convert the URL into the model for this route.
    [More info](http://emberjs.com/api/classes/Ember.Route.html#method_model).

    @method model
    @param {Object} params
    @param {Object} transition
   */
  model() {
    return this._super.apply(this, arguments).then((model) => this.fillData(model)
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
    this.setControllerVariables(controller);
  }
});
