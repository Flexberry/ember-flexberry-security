import Ember from 'ember';
import SecurityUserERouteMixin from 'ember-flexberry-security/mixins/security-user-e-route';
import { module, test } from 'qunit';

module('Unit | Mixin | security user e route');

// Replace this with your real tests.
test('it works', function(assert) {
  let SecurityUserERouteObject = Ember.Object.extend(SecurityUserERouteMixin);
  let subject = SecurityUserERouteObject.create();
  assert.ok(subject);
});
