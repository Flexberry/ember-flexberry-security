import Ember from 'ember';
import SecurityOperationERouteMixin from 'ember-flexberry-security/mixins/security-operation-e-route';
import { module, test } from 'qunit';

module('Unit | Mixin | security operation e route');

// Replace this with your real tests.
test('it works', function(assert) {
  let SecurityOperationERouteObject = Ember.Object.extend(SecurityOperationERouteMixin);
  let subject = SecurityOperationERouteObject.create();
  assert.ok(subject);
});
