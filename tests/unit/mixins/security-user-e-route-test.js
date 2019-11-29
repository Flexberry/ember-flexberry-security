import EmberObject from '@ember/object';
import SecurityUserERouteMixin from 'ember-flexberry-security/mixins/security-user-e-route';
import { module, test } from 'qunit';

module('Unit | Mixin | security user e route');

// Replace this with your real tests.
test('it works', function(assert) {
  let SecurityUserERouteObject = EmberObject.extend(SecurityUserERouteMixin);
  let subject = SecurityUserERouteObject.create();
  assert.ok(subject);
});
