import EmberObject from '@ember/object';
import SecurityGetAgentClassesMixin from 'ember-flexberry-security/mixins/security-get-agent-classes-route';
import { module, test } from 'qunit';

module('Unit | Mixin | security get agent classes');

// Replace this with your real tests.
test('it works', function(assert) {
  let SecurityGetAgentClassesObject = EmberObject.extend(SecurityGetAgentClassesMixin);
  let subject = SecurityGetAgentClassesObject.create();
  assert.ok(subject);
});
