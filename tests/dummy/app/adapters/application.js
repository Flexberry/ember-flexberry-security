import OdataAdapter from 'ember-flexberry-data/adapters/odata';
import AdapterMixin from 'ember-flexberry-data/mixins/adapter';
import config from '../config/environment';

export default OdataAdapter.extend(AdapterMixin, {
  host: config.APP.backendUrls.api,

  /**
  */
  ajax(url, type, options) {
    options.xhrFields = { withCredentials: true };
    return this._super(url, type, options);
  },
});
