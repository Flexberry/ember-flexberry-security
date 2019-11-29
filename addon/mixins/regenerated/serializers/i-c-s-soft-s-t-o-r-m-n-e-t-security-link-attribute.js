import Mixin from '@ember/object/mixin';

export let Serializer = Mixin.create({
  attrs: {
    view: { serialize: 'odata-id', deserialize: 'records' },
    attribute: { serialize: 'odata-id', deserialize: 'records' }
  },
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
