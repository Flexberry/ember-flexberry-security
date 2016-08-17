import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-link-group', 'Unit | Model | i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-link-group', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-agent',
    'model:i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity',
    'model:i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-field',
    'model:i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-session',
    'model:i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-link-group',
    'model:i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-object-type'
  ]
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
