import { Projection, Offline } from 'ember-flexberry-data';
import OfflineSchema from '../mixins/offline-schema';
import AddonOfflineSchema from 'ember-flexberry-security/mixins/offline-schema';

export default Offline.Store.reopen(Projection.StoreMixin, OfflineSchema, AddonOfflineSchema);
