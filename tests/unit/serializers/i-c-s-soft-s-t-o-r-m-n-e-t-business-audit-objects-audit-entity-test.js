import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity', 'Unit | Serializer | i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity',
    'transform:file',
    'transform:decimal',

    'transform:i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-t-execution-variant',
    'transform:i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-t-type-of-audit-operation',

    'model:i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-agent',
    'model:i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity',
    'model:i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-field',
    'model:i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-session',
    'model:i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-link-group',
    'model:i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-object-type'
  ]
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
