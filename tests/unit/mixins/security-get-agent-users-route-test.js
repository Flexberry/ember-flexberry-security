import Ember from 'ember';
import SecurityGetAgentUsersRouteMixin from 'ember-flexberry-security/mixins/security-get-agent-users-route';
import { module, test } from 'qunit';

module('Unit | Mixin | security get agent users route');

// Replace this with your real tests.
test('it works', function(assert) {
  let SecurityGetAgentUsersRouteObject = Ember.Object.extend(SecurityGetAgentUsersRouteMixin);
  let subject = SecurityGetAgentUsersRouteObject.create();
  assert.ok(subject);
});
