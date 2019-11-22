import Mixin from '@ember/object/mixin';

export let Serializer = Mixin.create({
  attrs: {
    applicationUser: { serialize: 'odata-id', deserialize: 'records' },
    comment: { serialize: 'odata-id', deserialize: 'records' }
  },
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
