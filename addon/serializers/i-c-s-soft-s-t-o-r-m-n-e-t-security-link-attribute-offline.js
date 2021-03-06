import DS from 'ember-data';
import { Serializer } from 'ember-flexberry-data';

export default Serializer.Offline.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    view: { serialize: 'id', deserialize: 'records' },
    attribute: { serialize: 'id', deserialize: 'records' },
  },
});
