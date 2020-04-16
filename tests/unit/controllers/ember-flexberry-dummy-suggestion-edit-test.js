import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:ember-flexberry-dummy-suggestion-edit', 'Unit | Controller | ember flexberry dummy suggestion edit', {
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
