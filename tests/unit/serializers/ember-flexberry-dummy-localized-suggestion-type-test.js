import { moduleForModel, test } from 'ember-qunit';

moduleForModel('ember-flexberry-dummy-localized-suggestion-type', 'Unit | Serializer | ember-flexberry-dummy-localized-suggestion-type', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:ember-flexberry-dummy-localized-suggestion-type',
    'transform:file',
    'transform:decimal',

    'transform:ember-flexberry-dummy-gender',
    'transform:ember-flexberry-dummy-vote-type',

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
    'model:ember-flexberry-dummy-vote',
    'service:syncer'
  ]
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
