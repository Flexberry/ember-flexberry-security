import Ember from 'ember';

export let Serializer = Ember.Mixin.create({
  attrs: {
    filter: { serialize: 'odata-id', deserialize: 'records' },
    permition: { serialize: 'odata-id', deserialize: 'records' }
  },
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
