import EmberObject from '@ember/object';
import ShowAuditActionControllerMixin from 'ember-flexberry-security/mixins/show-audit-action-controller';
import { module, test } from 'qunit';

module('Unit | Mixin | show audit action controller');

// Replace this with your real tests.
test('it works', function(assert) {
  let ShowAuditActionControllerObject = EmberObject.extend(ShowAuditActionControllerMixin);
  let subject = ShowAuditActionControllerObject.create();
  assert.ok(subject);
});
