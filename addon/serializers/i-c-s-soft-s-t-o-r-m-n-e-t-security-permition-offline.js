import DS from 'ember-data';
import OfflineSerializer from 'ember-flexberry-data/serializers/offline';

export default OfflineSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    agent: { serialize: 'id', deserialize: 'records' },
    subject: { serialize: 'id', deserialize: 'records' },
    access: { serialize: 'ids', deserialize: 'records' },
  },
});
