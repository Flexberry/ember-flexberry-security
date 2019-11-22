import Mixin from '@ember/object/mixin';

export let Serializer = Mixin.create({
  attrs: {
    localization: { serialize: 'odata-id', deserialize: 'records' },
    suggestionType: { serialize: 'odata-id', deserialize: 'records' }
  },
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
