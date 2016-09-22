import Ember from 'ember';
import SecurityRoleEControllerMixin from 'ember-flexberry-security/mixins/security-role-e-controller';
import { module, test } from 'qunit';

module('Unit | Mixin | security role e controller');

// Replace this with your real tests.
test('it works', function(assert) {
  let SecurityRoleEControllerObject = Ember.Object.extend(SecurityRoleEControllerMixin);
  let subject = SecurityRoleEControllerObject.create();
  assert.ok(subject);
});
