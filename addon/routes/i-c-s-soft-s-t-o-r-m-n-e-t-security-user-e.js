import Ember from 'ember';
import EditFormRoute from 'ember-flexberry/routes/edit-form';
import SecurityGetAgentRolesRouteMixin from '../mixins/security-get-agent-roles-route';
import SecurityGetAgentGroupsRouteMixin from '../mixins/security-get-agent-groups-route';
import SecurityGetAgentClassesRouteMixin from '../mixins/security-get-agent-classes-route';
import SecurityGetAgentOperationsRouteMixin from '../mixins/security-get-agent-operations-route';

export default EditFormRoute.extend(
    SecurityGetAgentRolesRouteMixin,
    SecurityGetAgentGroupsRouteMixin,
    SecurityGetAgentClassesRouteMixin,
    SecurityGetAgentOperationsRouteMixin,
{
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
        this.getAgentRoles(model, 'userRoles'),
        this.getAgentGroups(model, 'userGroups'),
        this.getAgentClasses(model, 'userClasses'),
        this.getAgentOperations(model, 'userOperations')
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
  }
});
