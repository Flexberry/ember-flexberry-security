import { moduleForModel, test } from 'ember-qunit';

moduleForModel('user-login', 'Unit | Model | user login', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();

  assert.ok(!!model);
});
