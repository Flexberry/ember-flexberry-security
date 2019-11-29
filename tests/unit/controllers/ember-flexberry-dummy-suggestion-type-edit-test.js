import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:ember-flexberry-dummy-suggestion-type-edit', 'Unit | Controller | ember flexberry dummy suggestion type edit', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
  needs: [
    'service:user-settings',
    'service:objectlistviewEvents',
    'controller:lookup-dialog',
    'controller:flexberry-file-view-dialog',
    'service:appState',
    'service:detail-interaction'
  ]
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});
