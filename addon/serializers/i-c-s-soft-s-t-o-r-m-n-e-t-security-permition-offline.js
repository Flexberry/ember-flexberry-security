import DS from 'ember-data';
import { Serializer } from 'ember-flexberry-data';

export default Serializer.Offline.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    agent: { serialize: 'id', deserialize: 'records' },
    subject: { serialize: 'id', deserialize: 'records' },
    access: { serialize: 'ids', deserialize: 'records' },
  },
});
