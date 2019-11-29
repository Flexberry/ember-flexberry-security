import DS from 'ember-data';
import OfflineSerializer from 'ember-flexberry-data/serializers/offline';

export default OfflineSerializer .extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    filter: { serialize: 'id', deserialize: 'records' },
    permition: { serialize: 'id', deserialize: 'records' },
  },
});
