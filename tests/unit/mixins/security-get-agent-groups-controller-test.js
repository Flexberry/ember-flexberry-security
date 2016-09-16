import Ember from 'ember';
import SecurityGetAgentGroupsMixin from 'ember-flexberry-security/mixins/security-get-agent-groups-controller';
import { module, test } from 'qunit';

module('Unit | Mixin | security get agent groups');

// Replace this with your real tests.
test('it works', function(assert) {
  let SecurityGetAgentGroupsObject = Ember.Object.extend(SecurityGetAgentGroupsMixin);
  let subject = SecurityGetAgentGroupsObject.create();
  assert.ok(subject);
});
