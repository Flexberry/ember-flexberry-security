import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-c-s-soft-s-t-o-r-m-n-e-t-security-link-view', 'Unit | Serializer | i-c-s-soft-s-t-o-r-m-n-e-t-security-link-view-offline', {
  needs: [
    'serializer:i-c-s-soft-s-t-o-r-m-n-e-t-security-link-view-offline',
  ],
});

test('it serializes records', function(assert) {
  let record = this.subject();
  let serializedRecord = record.serialize();
  assert.ok(serializedRecord);
});
