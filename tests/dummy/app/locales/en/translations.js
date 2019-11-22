import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';
import EmberFlexberrySecurityTranslations from 'ember-flexberry-security/locales/en/translations';
import $ from 'jquery';

import EmberFlexberryDummyApplicationUserListForm from './forms/ember-flexberry-dummy-application-user-list';
import EmberFlexberryDummyLocalizationListForm from './forms/ember-flexberry-dummy-localization-list';
import EmberFlexberryDummySuggestionListForm from './forms/ember-flexberry-dummy-suggestion-list';
import EmberFlexberryDummySuggestionTypeListForm from './forms/ember-flexberry-dummy-suggestion-type-list';
import EmberFlexberryDummyTestPolyChildListForm from './forms/ember-flexberry-dummy-test-poly-child-list';
import EmberFlexberryDummyTestPolyListForm from './forms/ember-flexberry-dummy-test-poly-list';
import EmberFlexberryDummyApplicationUserEditForm from './forms/ember-flexberry-dummy-application-user-edit';
import EmberFlexberryDummyCommentEditForm from './forms/ember-flexberry-dummy-comment-edit';
import EmberFlexberryDummyLocalizationEditForm from './forms/ember-flexberry-dummy-localization-edit';
import EmberFlexberryDummySuggestionEditForm from './forms/ember-flexberry-dummy-suggestion-edit';
import EmberFlexberryDummySuggestionTypeEditForm from './forms/ember-flexberry-dummy-suggestion-type-edit';
import EmberFlexberryDummyTestPolyChildEditForm from './forms/ember-flexberry-dummy-test-poly-child-edit';
import EmberFlexberryDummyTestPolyEditForm from './forms/ember-flexberry-dummy-test-poly-edit';
import EmberFlexberryDummyApplicationUserModel from './models/ember-flexberry-dummy-application-user';
import EmberFlexberryDummyCommentVoteModel from './models/ember-flexberry-dummy-comment-vote';
import EmberFlexberryDummyCommentModel from './models/ember-flexberry-dummy-comment';
import EmberFlexberryDummyLocalizationModel from './models/ember-flexberry-dummy-localization';
import EmberFlexberryDummyLocalizedSuggestionTypeModel from './models/ember-flexberry-dummy-localized-suggestion-type';
import EmberFlexberryDummySuggestionFileModel from './models/ember-flexberry-dummy-suggestion-file';
import EmberFlexberryDummySuggestionTypeModel from './models/ember-flexberry-dummy-suggestion-type';
import EmberFlexberryDummySuggestionModel from './models/ember-flexberry-dummy-suggestion';
import EmberFlexberryDummyTestPolyBaseModel from './models/ember-flexberry-dummy-test-poly-base';
import EmberFlexberryDummyTestPolyChildModel from './models/ember-flexberry-dummy-test-poly-child';
import EmberFlexberryDummyTestPolyModel from './models/ember-flexberry-dummy-test-poly';
import EmberFlexberryDummyVoteModel from './models/ember-flexberry-dummy-vote';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations, EmberFlexberrySecurityTranslations);

$.extend(true, translations, {
  models: {
    'ember-flexberry-dummy-application-user': EmberFlexberryDummyApplicationUserModel,
    'ember-flexberry-dummy-comment-vote': EmberFlexberryDummyCommentVoteModel,
    'ember-flexberry-dummy-comment': EmberFlexberryDummyCommentModel,
    'ember-flexberry-dummy-localization': EmberFlexberryDummyLocalizationModel,
    'ember-flexberry-dummy-localized-suggestion-type': EmberFlexberryDummyLocalizedSuggestionTypeModel,
    'ember-flexberry-dummy-suggestion-file': EmberFlexberryDummySuggestionFileModel,
    'ember-flexberry-dummy-suggestion-type': EmberFlexberryDummySuggestionTypeModel,
    'ember-flexberry-dummy-suggestion': EmberFlexberryDummySuggestionModel,
    'ember-flexberry-dummy-test-poly-base': EmberFlexberryDummyTestPolyBaseModel,
    'ember-flexberry-dummy-test-poly-child': EmberFlexberryDummyTestPolyChildModel,
    'ember-flexberry-dummy-test-poly': EmberFlexberryDummyTestPolyModel,
    'ember-flexberry-dummy-vote': EmberFlexberryDummyVoteModel,
  },

  'application-name': 'Ember-flexberry-security',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry-security dummy application!'
    },

    login: {
      caption: 'Login',
      logout: 'Logout',
      back: 'Back',
      login: 'Login',
      password: 'Password',
      'you-logged-as': 'You logged as: "{{login}}".',
      errors: {
        'empty-login': 'Login can not be empty.',
        'empty-password': 'Password can not be empty.',
        'server-error': 'Not response from server.',
        'incorrect-auth-data': 'Wrong login or password.',
        'login-please': 'Please, login.',
        'unknown-error': 'Oh, something went wrong...',
      },
    },

    application: {
      'sync-up': 'Sync up',
      header: {
        menu: {
          'sitemap-button': {
            caption: '',
            title: 'Menu'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        }
      },

      footer: {
        'application-name': 'Ember-flexberry-security',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Ember-flexberry-security',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        application: {
          caption: 'application',
          title: 'application',
          'ember-flexberry-dummy-application-user-list': {
            caption: 'ember-flexberry-dummy-application-user-list',
            title: 'ember-flexberry-dummy-application-user-list',

          },
          'ember-flexberry-dummy-localization-list': {
            caption: 'ember-flexberry-dummy-localization-list',
            title: 'ember-flexberry-dummy-localization-list',

          },
          'ember-flexberry-dummy-suggestion-list': {
            caption: 'ember-flexberry-dummy-suggestion-list',
            title: 'ember-flexberry-dummy-suggestion-list',

          },
          'ember-flexberry-dummy-suggestion-type-list': {
            caption: 'ember-flexberry-dummy-suggestion-type-list',
            title: 'ember-flexberry-dummy-suggestion-type-list',

          },
          'ember-flexberry-dummy-test-poly-child-list': {
            caption: 'ember-flexberry-dummy-test-poly-child-list',
            title: 'ember-flexberry-dummy-test-poly-child-list',

          },
          'ember-flexberry-dummy-test-poly-list': {
            caption: 'ember-flexberry-dummy-test-poly-list',
            title: 'ember-flexberry-dummy-test-poly-list',

          }
        },
      }
    },
    audit: {
      'show-audit-button-text': 'Audit'
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },

    'ember-flexberry-dummy-application-user-list': EmberFlexberryDummyApplicationUserListForm,
    'ember-flexberry-dummy-localization-list': EmberFlexberryDummyLocalizationListForm,
    'ember-flexberry-dummy-suggestion-list': EmberFlexberryDummySuggestionListForm,
    'ember-flexberry-dummy-suggestion-type-list': EmberFlexberryDummySuggestionTypeListForm,
    'ember-flexberry-dummy-test-poly-child-list': EmberFlexberryDummyTestPolyChildListForm,
    'ember-flexberry-dummy-test-poly-list': EmberFlexberryDummyTestPolyListForm,
    'ember-flexberry-dummy-application-user-edit': EmberFlexberryDummyApplicationUserEditForm,
    'ember-flexberry-dummy-comment-edit': EmberFlexberryDummyCommentEditForm,
    'ember-flexberry-dummy-localization-edit': EmberFlexberryDummyLocalizationEditForm,
    'ember-flexberry-dummy-suggestion-edit': EmberFlexberryDummySuggestionEditForm,
    'ember-flexberry-dummy-suggestion-type-edit': EmberFlexberryDummySuggestionTypeEditForm,
    'ember-flexberry-dummy-test-poly-child-edit': EmberFlexberryDummyTestPolyChildEditForm,
    'ember-flexberry-dummy-test-poly-edit': EmberFlexberryDummyTestPolyEditForm,
  },

});

export default translations;
