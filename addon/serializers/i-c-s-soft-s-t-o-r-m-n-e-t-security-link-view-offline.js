import DS from 'ember-data';
import OfflineSerializer from 'ember-flexberry-data/serializers/offline';

export default OfflineSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    view: { serialize: 'id', deserialize: 'records' },
    class: { serialize: 'id', deserialize: 'records' },
  },
});
