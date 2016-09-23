import DS from 'ember-data';
import { Serializer } from 'ember-flexberry-data';

export default Serializer.Offline.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    filter: { serialize: 'id', deserialize: 'records' },
    permition: { serialize: 'id', deserialize: 'records' },
  },
});
