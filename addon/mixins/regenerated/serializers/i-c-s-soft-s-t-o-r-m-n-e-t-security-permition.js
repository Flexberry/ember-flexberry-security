import Mixin from '@ember/object/mixin';

export let Serializer = Mixin.create({
  attrs: {
    agent: { serialize: 'odata-id', deserialize: 'records' },
    subject: { serialize: 'odata-id', deserialize: 'records' },
    access: { serialize: false, deserialize: 'records' }
  },
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
