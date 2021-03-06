import Ember from 'ember';

export let Serializer = Ember.Mixin.create({
  attrs: {
    parent: { serialize: 'odata-id', deserialize: 'records' },
    localizedTypes: { serialize: false, deserialize: 'records' }
  },
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
