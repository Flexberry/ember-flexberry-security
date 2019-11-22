import Mixin from '@ember/object/mixin';

export let Serializer = Mixin.create({
  attrs: {
    parent: { serialize: 'odata-id', deserialize: 'records' },
    localizedTypes: { serialize: false, deserialize: 'records' }
  },
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
