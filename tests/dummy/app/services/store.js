import { Projection, Offline } from 'ember-flexberry-data';

export default Offline.Store.reopen(Projection.StoreMixin);
