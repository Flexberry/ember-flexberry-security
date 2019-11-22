import Mixin from '@ember/object/mixin';

export let Serializer = Mixin.create({
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
