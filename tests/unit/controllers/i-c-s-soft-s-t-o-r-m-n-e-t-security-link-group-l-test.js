import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group-l', 'Unit | Controller | i c s soft s t o r m n e t security link group l', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
  needs: [
    'service:user-settings',
    'service:objectlistview-events',
    'service:advLimit',
    'controller:advlimit-dialog',
    'controller:colsconfig-dialog'
  ]
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});
