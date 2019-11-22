import EmberObject from '@ember/object';
import SecurityRoleEControllerMixin from 'ember-flexberry-security/mixins/security-role-e-controller';
import { module, test } from 'qunit';

module('Unit | Mixin | security role e controller');

// Replace this with your real tests.
test('it works', function(assert) {
  let SecurityRoleEControllerObject = EmberObject.extend(SecurityRoleEControllerMixin);
  let subject = SecurityRoleEControllerObject.create();
  assert.ok(subject);
});
