import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-c-s-soft-s-t-o-r-m-n-e-t-security-permition', 'Unit | Serializer | i-c-s-soft-s-t-o-r-m-n-e-t-security-permition-offline', {
  needs: [
    'serializer:i-c-s-soft-s-t-o-r-m-n-e-t-security-permition-offline',
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
    'model:i-c-s-soft-s-t-o-r-m-n-e-t-security-subject'
  ],
});

test('it serializes records', function(assert) {
  let record = this.subject();
  let serializedRecord = record.serialize();
  assert.ok(serializedRecord);
});
