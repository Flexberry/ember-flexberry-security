import EmberObject from '@ember/object';
import SecurityGroupERouteMixin from 'ember-flexberry-security/mixins/security-group-e-route';
import { module, test } from 'qunit';

module('Unit | Mixin | security group e route');

// Replace this with your real tests.
test('it works', function(assert) {
  let SecurityGroupERouteObject = EmberObject.extend(SecurityGroupERouteMixin);
  let subject = SecurityGroupERouteObject.create();
  assert.ok(subject);
});
