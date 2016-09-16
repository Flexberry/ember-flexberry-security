import Ember from 'ember';
import EditFormNewRoute from 'ember-flexberry/routes/edit-form-new';
import SecurityGetAgentRolesControllerMixin from '../../mixins/security-get-agent-roles-controller';
import SecurityGetAgentGroupsControllerMixin from '../../mixins/security-get-agent-groups-controller';
import SecurityGetAgentClassesControllerMixin from '../../mixins/security-get-agent-classes-controller';
import SecurityGetAgentOperationsControllerMixin from '../../mixins/security-get-agent-operations-controller';

export default EditFormNewRoute.extend(
    SecurityGetAgentRolesControllerMixin,
    SecurityGetAgentGroupsControllerMixin,
    SecurityGetAgentClassesControllerMixin,
    SecurityGetAgentOperationsControllerMixin,
{
  modelProjection: 'UserE',
  modelName: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-agent',
  templateName: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-user-e',
  userRoles: null,
  userGroups: null,
  userClasses: null,
  userOperations: null,

  afterModel: function(model) {
    return new Ember.RSVP.Promise((resolve, reject) => {

      model.set('isUser', true);
      model.set('isGroup', false);
      model.set('isRole', false);
      model.set('enabled', true);

      Ember.RSVP.all([
        this.getAgentRoles(model, 'userRoles'),
        this.getAgentGroups(model, 'userGroups'),
        this.getAgentClasses(model, 'userClasses'),
        this.getAgentOperations(model, 'userOperations')
      ]).then(()=> { resolve(); }).catch(error => { reject(error); });
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
  }
});
