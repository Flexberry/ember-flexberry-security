import Ember from 'ember';

export let Serializer = Ember.Mixin.create({
  attrs: {
    headAuditEntity: { serialize: 'odata-id', deserialize: 'records' }
  },

  /**
    Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
