import Ember from 'ember';

export let Serializer = Ember.Mixin.create({
  attrs: {
    type: { serialize: 'odata-id', deserialize: 'records' },
    editor1: { serialize: 'odata-id', deserialize: 'records' },
    author: { serialize: 'odata-id', deserialize: 'records' },
    userVotes: { serialize: false, deserialize: 'records' },
    files: { serialize: false, deserialize: 'records' },
    comments: { serialize: false, deserialize: 'records' }
  },
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
