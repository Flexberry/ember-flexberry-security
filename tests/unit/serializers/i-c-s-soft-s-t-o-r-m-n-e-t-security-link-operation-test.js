import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-c-s-soft-s-t-o-r-m-n-e-t-security-link-operation', 'Unit | Serializer | i-c-s-soft-s-t-o-r-m-n-e-t-security-link-operation', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-c-s-soft-s-t-o-r-m-n-e-t-security-link-operation',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-c-s-soft-s-t-o-r-m-n-e-t-security-t-type-access',

    'model:i-c-s-soft-s-t-o-r-m-n-e-t-security-access',
    'model:i-c-s-soft-s-t-o-r-m-n-e-t-security-agent',
    'model:i-c-s-soft-s-t-o-r-m-n-e-t-security-filter',
    'model:i-c-s-soft-s-t-o-r-m-n-e-t-security-impersonalization',
    'model:i-c-s-soft-s-t-o-r-m-n-e-t-security-link-attribute',
    'model:i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group',
    'model:i-c-s-soft-s-t-o-r-m-n-e-t-security-link-operation',
    'model:i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role',
    'model:i-c-s-soft-s-t-o-r-m-n-e-t-security-link-view',
    'model:i-c-s-soft-s-t-o-r-m-n-e-t-security-permition',
    'model:i-c-s-soft-s-t-o-r-m-n-e-t-security-session',
    'model:i-c-s-soft-s-t-o-r-m-n-e-t-security-subject',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
