import DS from 'ember-data';
import OfflineSerializer from 'ember-flexberry-data/serializers/offline';

export default OfflineSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    type: { serialize: 'id', deserialize: 'records' },
    editor1: { serialize: 'id', deserialize: 'records' },
    author: { serialize: 'id', deserialize: 'records' },
    userVotes: { serialize: 'ids', deserialize: 'records' },
    files: { serialize: 'ids', deserialize: 'records' },
    comments: { serialize: 'ids', deserialize: 'records' },
  },
});
