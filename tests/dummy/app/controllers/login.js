import Ember from 'ember';
import config from '../config/environment';
import { translationMacro as t } from 'ember-i18n';

export default Ember.Controller.extend({
  actions: {
    /**
    */
    login() {
      let _this = this;
      let login = this.get('login');
      let password = this.get('password');
      if (login && password) {
        _this.setProperties({
          errorMessages: null,
          emptyLogin: null,
          emptyPassword: null,
        });
        Ember.$.ajax({
          type: 'GET',
          xhrFields: { withCredentials: true },
          url: `${config.APP.backendUrls.api}/Login(login='${login}',password='${password}')`,
          success(result) {
            if (result.value === true) {
              _this.transitionToRoute('index');
            } else {
              _this.set('errorMessages', t('forms.login.errors.incorrect-auth-data'));
            }
          },
          error() {
            _this.set('errorMessages', t('forms.login.errors.server-error'));
          },
        });
      } else {
        if (!login) {
          _this.set('emptyLogin', t('forms.login.errors.empty-login'));
        }

        if (!password) {
          _this.set('emptyPassword', t('forms.login.errors.empty-password'));
        }
      }
    },

    /**
    */
    close() {
      this.transitionToRoute('index');
    }
  },
});
