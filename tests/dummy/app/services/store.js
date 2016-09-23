import { Projection, Offline } from 'ember-flexberry-data';
import OfflineSchema from '../mixins/offline-schema';

export default Offline.Store.reopen(Projection.StoreMixin, OfflineSchema);
