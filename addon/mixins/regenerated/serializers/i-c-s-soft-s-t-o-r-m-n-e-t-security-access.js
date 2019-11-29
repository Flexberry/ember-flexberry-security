import Mixin from '@ember/object/mixin';

export let Serializer = Mixin.create({
  attrs: {
    filter: { serialize: 'odata-id', deserialize: 'records' },
    permition: { serialize: 'odata-id', deserialize: 'records' }
  },
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
