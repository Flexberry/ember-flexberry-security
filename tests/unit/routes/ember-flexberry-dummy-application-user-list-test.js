import { moduleFor, test } from 'ember-qunit';

moduleFor('route:ember-flexberry-dummy-application-user-list', 'Unit | Route | ember flexberry dummy application user list', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
  needs: [
    'service:objectlistviewEvents',
    'service:formLoadTimeTracker',
    'service:colsConfigMenu',
    'service:appState',
  ]
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
