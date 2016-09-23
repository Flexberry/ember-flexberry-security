import DS from 'ember-data';
import { Serializer } from 'ember-flexberry-data';

export default Serializer.Offline.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    user: { serialize: 'id', deserialize: 'records' },
    agent: { serialize: 'id', deserialize: 'records' },
  },
});
