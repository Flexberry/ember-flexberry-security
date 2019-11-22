import EmberObject from '@ember/object';
import SecurityGetAgentGroupsMixin from 'ember-flexberry-security/mixins/security-get-agent-groups-route';
import { module, test } from 'qunit';

module('Unit | Mixin | security get agent groups');

// Replace this with your real tests.
test('it works', function(assert) {
  let SecurityGetAgentGroupsObject = EmberObject.extend(SecurityGetAgentGroupsMixin);
  let subject = SecurityGetAgentGroupsObject.create();
  assert.ok(subject);
});
