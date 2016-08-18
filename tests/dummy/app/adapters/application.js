import { Projection, Adapter } from 'ember-flexberry-data';
import config from '../config/environment';

export default Adapter.Odata.extend(Projection.AdapterMixin, {
  host: config.APP.backendUrls.api,

  /**
  */
  ajax(url, type, options) {
    options.xhrFields = { withCredentials: true };
    return this._super(url, type, options);
  },
});
