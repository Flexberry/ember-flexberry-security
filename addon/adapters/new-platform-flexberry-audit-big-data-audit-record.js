import Ember from 'ember';
import { Adapter } from 'ember-flexberry-data';

const { getOwner } = Ember;

export default Adapter.Odata.extend({

  init: function () {
    this._super(...arguments);

    const config = getOwner(this).resolveRegistration('config:environment');
    const auditBigDataOdataHost = config.APP.auditBigDataOdata || '';
    this.set('host', auditBigDataOdataHost);
  },
});
