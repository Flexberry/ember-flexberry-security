import Ember from 'ember';
import SecurityRoleERouteMixin from 'ember-flexberry-security/mixins/security-role-e-route';
import { module, test } from 'qunit';

module('Unit | Mixin | security role e route');

// Replace this with your real tests.
test('it works', function(assert) {
  let SecurityRoleERouteObject = Ember.Object.extend(SecurityRoleERouteMixin);
  let subject = SecurityRoleERouteObject.create();
  assert.ok(subject);
});
