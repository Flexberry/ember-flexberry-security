import Ember from 'ember';
import config from '../config/environment';
import { translationMacro as t } from 'ember-i18n';
import ModalApplicationRouteMixin from 'ember-flexberry/mixins/modal-application-route';

export default Ember.Route.extend(ModalApplicationRouteMixin, {
  /**
  */
  activate() {
    let _this = this;
    let controller = _this.controllerFor('application');
    if (!controller.get('login')) {
      Ember.$.ajax({
        type: 'GET',
        xhrFields: { withCredentials: true },
        url: `${config.APP.backendUrls.api}/GetAuthenticatedUser()`,
        success(result) {
          if (result.value) {
            controller.set('login', result.value);
          }
        },
      });
    }
  },

  actions: {
    /**
    */
    willTransition(transition) {
      let _this = this;
      let login = _this.controller.get('login');
      if (!login && transition.targetName !== 'login' && transition.targetName !== 'index') {
        transition.abort();
        Ember.$.ajax({
          type: 'GET',
          xhrFields: { withCredentials: true },
          url: `${config.APP.backendUrls.api}/GetAuthenticatedUser()`,
          success(result) {
            if (result.value) {
              _this.controller.set('login', result.value);
              transition.retry();
            } else {
              _this.controller.set('errorMessage', t('forms.login.errors.login-please'));
              _this.transitionTo('login');
            }
          },
          error() {
            _this.controller.set('errorMessage', t('forms.login.errors.unknown-error'));
            _this.transitionTo('index');
          },
        });
      }
    },
  }
});
