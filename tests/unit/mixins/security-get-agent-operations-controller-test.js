import Ember from 'ember';
import SecurityGetAgentOperationsMixin from 'ember-flexberry-security/mixins/security-get-agent-operations-controller';
import { module, test } from 'qunit';

module('Unit | Mixin | security get agent operations');

// Replace this with your real tests.
test('it works', function(assert) {
  let SecurityGetAgentOperationsObject = Ember.Object.extend(SecurityGetAgentOperationsMixin);
  let subject = SecurityGetAgentOperationsObject.create();
  assert.ok(subject);
});
