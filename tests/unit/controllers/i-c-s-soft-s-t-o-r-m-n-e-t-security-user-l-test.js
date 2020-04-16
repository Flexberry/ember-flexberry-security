import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:i-c-s-soft-s-t-o-r-m-n-e-t-security-user-l', 'Unit | Controller | i c s soft s t o r m n e t security user l', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
  needs: [
    'controller:colsconfig-dialog',
    'controller:advlimit-dialog',
    'service:advLimit',
    'service:user-settings',
    'service:objectlistview-events'
  ]
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});
