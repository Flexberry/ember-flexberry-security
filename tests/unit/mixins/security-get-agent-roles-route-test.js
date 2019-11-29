import EmberObject from '@ember/object';
import SecurityGetAgentRolesMixin from 'ember-flexberry-security/mixins/security-get-agent-roles-route';
import { module, test } from 'qunit';

module('Unit | Mixin | security get agent roles');

// Replace this with your real tests.
test('it works', function(assert) {
  let SecurityGetAgentRolesObject = EmberObject.extend(SecurityGetAgentRolesMixin);
  let subject = SecurityGetAgentRolesObject.create();
  assert.ok(subject);
});
