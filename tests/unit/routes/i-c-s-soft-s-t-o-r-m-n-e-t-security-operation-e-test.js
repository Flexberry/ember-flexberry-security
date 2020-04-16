import { moduleFor, test } from 'ember-qunit';

moduleFor('route:i-c-s-soft-s-t-o-r-m-n-e-t-security-operation-e', 'Unit | Route | i c s soft s t o r m n e t security operation e', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
  needs: [
    'service:objectlistview-events',
    'service:appState',
    'service:colsConfigMenu',
    'service:detail-interaction'
  ]
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
