import Mixin from '@ember/object/mixin';

export let Serializer = Mixin.create({
  attrs: {
    author: { serialize: 'odata-id', deserialize: 'records' },
    suggestion: { serialize: 'odata-id', deserialize: 'records' },
    userVotes: { serialize: false, deserialize: 'records' }
  },
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
