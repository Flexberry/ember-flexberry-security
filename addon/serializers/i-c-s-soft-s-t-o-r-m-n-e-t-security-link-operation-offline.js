import DS from 'ember-data';
import { Serializer } from 'ember-flexberry-data';

export default Serializer.Offline.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    operation: { serialize: 'id', deserialize: 'records' },
    class: { serialize: 'id', deserialize: 'records' },
  },
});
