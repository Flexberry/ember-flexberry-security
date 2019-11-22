import Mixin from '@ember/object/mixin';

export let Serializer = Mixin.create({
  attrs: {
    subject: { serialize: 'odata-id', deserialize: 'records' }
  },
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
