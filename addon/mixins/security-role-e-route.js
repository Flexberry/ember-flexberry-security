import Ember from 'ember';
import SecurityGetAgentRolesRouteMixin from './security-get-agent-roles-route';
import SecurityGetAgentUsersRouteMixin from './security-get-agent-users-route';
import SecurityGetAgentClassesRouteMixin from './security-get-agent-classes-route';
import SecurityGetAgentOperationsRouteMixin from './security-get-agent-operations-route';

export default Ember.Mixin.create(
    SecurityGetAgentRolesRouteMixin,
    SecurityGetAgentUsersRouteMixin,
    SecurityGetAgentClassesRouteMixin,
    SecurityGetAgentOperationsRouteMixin,
  {
  roleRoles: null,
  roleUsers: null,
  roleClasses: null,
  roleOperations: null,

  fillData(model) {
    return Ember.RSVP.all([
    this.getAgentRoles(model, 'roleRoles'),
    this.getAgentUsers(model, 'roleUsers'),
    this.getAgentClasses(model, 'roleClasses'),
    this.getAgentOperations(model, 'roleOperations')
  ]).then(() => model);
  },

  setControllerVariables(controller) {
    controller.set('roleRoles', this.roleRoles);
    controller.set('roleUsers', this.roleUsers);
    controller.set('roleClasses', this.roleClasses);
    controller.set('roleOperations', this.roleOperations);
  }
});
