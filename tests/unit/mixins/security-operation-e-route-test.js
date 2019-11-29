import EmberObject from '@ember/object';
import SecurityOperationERouteMixin from 'ember-flexberry-security/mixins/security-operation-e-route';
import { module, test } from 'qunit';

module('Unit | Mixin | security operation e route');

// Replace this with your real tests.
test('it works', function(assert) {
  let SecurityOperationERouteObject = EmberObject.extend(SecurityOperationERouteMixin);
  let subject = SecurityOperationERouteObject.create();
  assert.ok(subject);
});
