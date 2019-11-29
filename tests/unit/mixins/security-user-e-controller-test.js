import EmberObject from '@ember/object';
import SecurityUserEControllerMixin from 'ember-flexberry-security/mixins/security-user-e-controller';
import { module, test } from 'qunit';

module('Unit | Mixin | security user e controller');

// Replace this with your real tests.
test('it works', function(assert) {
  let SecurityUserEControllerObject = EmberObject.extend(SecurityUserEControllerMixin);
  let subject = SecurityUserEControllerObject.create();
  assert.ok(subject);
});
