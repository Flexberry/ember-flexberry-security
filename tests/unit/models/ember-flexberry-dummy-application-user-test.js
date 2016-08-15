import { moduleForModel, test } from 'ember-qunit';

moduleForModel('ember-flexberry-dummy-application-user', 'Unit | Model | ember-flexberry-dummy-application-user', {
  // Specify the other units that are required for this test.
  needs: [
    'model:ember-flexberry-dummy-application-user',
    'model:ember-flexberry-dummy-comment-vote',
    'model:ember-flexberry-dummy-comment',
    'model:ember-flexberry-dummy-localization',
    'model:ember-flexberry-dummy-localized-suggestion-type',
    'model:ember-flexberry-dummy-suggestion-file',
    'model:ember-flexberry-dummy-suggestion-type',
    'model:ember-flexberry-dummy-suggestion',
    'model:ember-flexberry-dummy-test-poly-base',
    'model:ember-flexberry-dummy-test-poly-child',
    'model:ember-flexberry-dummy-test-poly',
    'model:ember-flexberry-dummy-vote'
  ]
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
