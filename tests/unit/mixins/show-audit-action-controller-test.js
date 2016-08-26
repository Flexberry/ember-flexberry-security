import Ember from 'ember';
import ShowAuditActionControllerMixin from 'ember-flexberry-security/mixins/show-audit-action-controller';
import { module, test } from 'qunit';

module('Unit | Mixin | show audit action controller');

// Replace this with your real tests.
test('it works', function(assert) {
  let ShowAuditActionControllerObject = Ember.Object.extend(ShowAuditActionControllerMixin);
  let subject = ShowAuditActionControllerObject.create();
  assert.ok(subject);
});
