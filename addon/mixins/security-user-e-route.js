import Mixin from '@ember/object/mixin';
import { all } from 'rsvp';
import SecurityGetAgentRolesRouteMixin from './security-get-agent-roles-route';
import SecurityGetAgentGroupsRouteMixin from './security-get-agent-groups-route';
import SecurityGetAgentClassesRouteMixin from './security-get-agent-classes-route';
import SecurityGetAgentOperationsRouteMixin from './security-get-agent-operations-route';

export default Mixin.create(
    SecurityGetAgentRolesRouteMixin,
    SecurityGetAgentGroupsRouteMixin,
    SecurityGetAgentClassesRouteMixin,
    SecurityGetAgentOperationsRouteMixin,
    {

      userRoles: null,
      userGroups: null,
      userClasses: null,
      userOperations: null,

      fillData(model) {
        return all([
        this.getAgentRoles(model, 'userRoles'),
        this.getAgentGroups(model, 'userGroups'),
        this.getAgentClasses(model, 'userClasses'),
        this.getAgentOperations(model, 'userOperations')
      ]).then(() => model);
      },

      setControllerVariables(controller) {
        controller.set('userRoles', this.userRoles);
        controller.set('userGroups', this.userGroups);
        controller.set('userClasses', this.userClasses);
        controller.set('userOperations', this.userOperations);
      }

    });
