import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:i-c-s-soft-s-t-o-r-m-n-e-t-security-access-e', 'Unit | Controller | i c s soft s t o r m n e t security access e', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
  needs: [
    'controller:colsconfig-dialog',
    'controller:lookup-dialog',
    'controller:flexberry-file-view-dialog',
    'controller:advlimit-dialog',
    'service:objectlistviewEvents',
    'service:advLimit',
    'service:user-settings',
    'service:appState',
    'service:detail-interaction'
  ]
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});
