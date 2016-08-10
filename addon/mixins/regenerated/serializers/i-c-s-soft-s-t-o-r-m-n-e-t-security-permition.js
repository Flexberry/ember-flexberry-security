import Ember from 'ember';

export let Serializer = Ember.Mixin.create({
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
