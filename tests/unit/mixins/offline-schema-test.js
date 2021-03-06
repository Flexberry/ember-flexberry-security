import Ember from 'ember';
import OfflineSchemaMixin from 'ember-flexberry-security/mixins/offline-schema';
import { module, test } from 'qunit';

module('Unit | Mixin | offline-schema');

test('it works', function(assert) {
  let OfflineSchemaObject = Ember.Object.extend(OfflineSchemaMixin);
  let subject = OfflineSchemaObject.create();
  assert.ok(typeof subject.get('offlineSchema') === 'object', 'Offline schema this is object.');
});
