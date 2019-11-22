import Mixin from '@ember/object/mixin';

export let Serializer = Mixin.create({
  attrs: {
    operation: { serialize: 'odata-id', deserialize: 'records' },
    class: { serialize: 'odata-id', deserialize: 'records' }
  },
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
