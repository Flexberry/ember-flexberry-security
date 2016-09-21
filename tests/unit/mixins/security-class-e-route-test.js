import Ember from 'ember';
import SecurityClassERouteMixin from 'ember-flexberry-security/mixins/security-class-e-route';
import { module, test } from 'qunit';

module('Unit | Mixin | security class e route');

// Replace this with your real tests.
test('it works', function(assert) {
  let SecurityClassERouteObject = Ember.Object.extend(SecurityClassERouteMixin);
  let subject = SecurityClassERouteObject.create();
  assert.ok(subject);
});
