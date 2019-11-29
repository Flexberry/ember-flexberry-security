import DS from 'ember-data';
import OfflineSerializer from 'ember-flexberry-data/serializers/offline';

export default OfflineSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    role: { serialize: 'id', deserialize: 'records' },
    agent: { serialize: 'id', deserialize: 'records' },
  },
});
