import Ember from 'ember';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import ICSSoftSTORMNETSecurityAccessLForm from './forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-access-l';
import ICSSoftSTORMNETSecurityClassLForm from './forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-class-l';
import ICSSoftSTORMNETSecurityGroupLForm from './forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-group-l';
import ICSSoftSTORMNETSecurityLinkGroupLForm from './forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group-l';
import ICSSoftSTORMNETSecurityLinkRoleLForm from './forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role-l';
import ICSSoftSTORMNETSecurityOperationLForm from './forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-operation-l';
import ICSSoftSTORMNETSecurityPermitionLForm from './forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-permition-l';
import ICSSoftSTORMNETSecurityRoleLForm from './forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-role-l';
import ICSSoftSTORMNETSecurityUserLForm from './forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-user-l';
import ICSSoftSTORMNETSecurityViewLForm from './forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-view-l';
import ICSSoftSTORMNETSecurityAccessEForm from './forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-access-e';
import ICSSoftSTORMNETSecurityClassEForm from './forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-class-e';
import ICSSoftSTORMNETSecurityGroupEForm from './forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-group-e';
import ICSSoftSTORMNETSecurityLinkGroupEForm from './forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group-e';
import ICSSoftSTORMNETSecurityLinkRoleEForm from './forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role-e';
import ICSSoftSTORMNETSecurityOperationEForm from './forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-operation-e';
import ICSSoftSTORMNETSecurityPermitionEForm from './forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-permition-e';
import ICSSoftSTORMNETSecurityRoleEForm from './forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-role-e';
import ICSSoftSTORMNETSecurityUserEForm from './forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-user-e';
import ICSSoftSTORMNETSecurityViewEForm from './forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-view-e';
import ICSSoftSTORMNETSecurityAccessModel from './models/i-c-s-soft-s-t-o-r-m-n-e-t-security-access';
import ICSSoftSTORMNETSecurityAgentModel from './models/i-c-s-soft-s-t-o-r-m-n-e-t-security-agent';
import ICSSoftSTORMNETSecurityFilterModel from './models/i-c-s-soft-s-t-o-r-m-n-e-t-security-filter';
import ICSSoftSTORMNETSecurityImpersonalizationModel from './models/i-c-s-soft-s-t-o-r-m-n-e-t-security-impersonalization';
import ICSSoftSTORMNETSecurityLinkAttributeModel from './models/i-c-s-soft-s-t-o-r-m-n-e-t-security-link-attribute';
import ICSSoftSTORMNETSecurityLinkGroupModel from './models/i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group';
import ICSSoftSTORMNETSecurityLinkOperationModel from './models/i-c-s-soft-s-t-o-r-m-n-e-t-security-link-operation';
import ICSSoftSTORMNETSecurityLinkRoleModel from './models/i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role';
import ICSSoftSTORMNETSecurityLinkViewModel from './models/i-c-s-soft-s-t-o-r-m-n-e-t-security-link-view';
import ICSSoftSTORMNETSecurityPermitionModel from './models/i-c-s-soft-s-t-o-r-m-n-e-t-security-permition';
import ICSSoftSTORMNETSecuritySessionModel from './models/i-c-s-soft-s-t-o-r-m-n-e-t-security-session';
import ICSSoftSTORMNETSecuritySubjectModel from './models/i-c-s-soft-s-t-o-r-m-n-e-t-security-subject';

const translations = {};
Ember.$.extend(true, translations, EmberFlexberryTranslations);

Ember.$.extend(true, translations, {
  models: {
    'i-c-s-soft-s-t-o-r-m-n-e-t-security-access': ICSSoftSTORMNETSecurityAccessModel,
    'i-c-s-soft-s-t-o-r-m-n-e-t-security-agent': ICSSoftSTORMNETSecurityAgentModel,
    'i-c-s-soft-s-t-o-r-m-n-e-t-security-filter': ICSSoftSTORMNETSecurityFilterModel,
    'i-c-s-soft-s-t-o-r-m-n-e-t-security-impersonalization': ICSSoftSTORMNETSecurityImpersonalizationModel,
    'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-attribute': ICSSoftSTORMNETSecurityLinkAttributeModel,
    'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group': ICSSoftSTORMNETSecurityLinkGroupModel,
    'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-operation': ICSSoftSTORMNETSecurityLinkOperationModel,
    'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role': ICSSoftSTORMNETSecurityLinkRoleModel,
    'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-view': ICSSoftSTORMNETSecurityLinkViewModel,
    'i-c-s-soft-s-t-o-r-m-n-e-t-security-permition': ICSSoftSTORMNETSecurityPermitionModel,
    'i-c-s-soft-s-t-o-r-m-n-e-t-security-session': ICSSoftSTORMNETSecuritySessionModel,
    'i-c-s-soft-s-t-o-r-m-n-e-t-security-subject': ICSSoftSTORMNETSecuritySubjectModel,
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            caption: '',
            title: 'Menu'
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
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
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
        полномочия: {
          caption: 'полномочия',
          title: 'полномочия',
          'i-c-s-soft-s-t-o-r-m-n-e-t-security-user-l': {
            caption: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-user-l',
            title: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-user-l',

          },
          'i-c-s-soft-s-t-o-r-m-n-e-t-security-role-l': {
            caption: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-role-l',
            title: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-role-l',

          },
          'i-c-s-soft-s-t-o-r-m-n-e-t-security-group-l': {
            caption: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-group-l',
            title: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-group-l',

          },
          'i-c-s-soft-s-t-o-r-m-n-e-t-security-class-l': {
            caption: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-class-l',
            title: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-class-l',

          },
          'i-c-s-soft-s-t-o-r-m-n-e-t-security-operation-l': {
            caption: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-operation-l',
            title: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-operation-l',

          },
          'i-c-s-soft-s-t-o-r-m-n-e-t-security-view-l': {
            caption: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-view-l',
            title: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-view-l',

          },
          'i-c-s-soft-s-t-o-r-m-n-e-t-security-permition-l': {
            caption: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-permition-l',
            title: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-permition-l',

          },
          'i-c-s-soft-s-t-o-r-m-n-e-t-security-access-l': {
            caption: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-access-l',
            title: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-access-l',

          },
          'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group-l': {
            caption: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group-l',
            title: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group-l',

          },
          'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role-l': {
            caption: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role-l',
            title: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role-l',

          }
        },
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-c-s-soft-s-t-o-r-m-n-e-t-security-access-l': ICSSoftSTORMNETSecurityAccessLForm,
    'i-c-s-soft-s-t-o-r-m-n-e-t-security-class-l': ICSSoftSTORMNETSecurityClassLForm,
    'i-c-s-soft-s-t-o-r-m-n-e-t-security-group-l': ICSSoftSTORMNETSecurityGroupLForm,
    'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group-l': ICSSoftSTORMNETSecurityLinkGroupLForm,
    'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role-l': ICSSoftSTORMNETSecurityLinkRoleLForm,
    'i-c-s-soft-s-t-o-r-m-n-e-t-security-operation-l': ICSSoftSTORMNETSecurityOperationLForm,
    'i-c-s-soft-s-t-o-r-m-n-e-t-security-permition-l': ICSSoftSTORMNETSecurityPermitionLForm,
    'i-c-s-soft-s-t-o-r-m-n-e-t-security-role-l': ICSSoftSTORMNETSecurityRoleLForm,
    'i-c-s-soft-s-t-o-r-m-n-e-t-security-user-l': ICSSoftSTORMNETSecurityUserLForm,
    'i-c-s-soft-s-t-o-r-m-n-e-t-security-view-l': ICSSoftSTORMNETSecurityViewLForm,
    'i-c-s-soft-s-t-o-r-m-n-e-t-security-access-e': ICSSoftSTORMNETSecurityAccessEForm,
    'i-c-s-soft-s-t-o-r-m-n-e-t-security-class-e': ICSSoftSTORMNETSecurityClassEForm,
    'i-c-s-soft-s-t-o-r-m-n-e-t-security-group-e': ICSSoftSTORMNETSecurityGroupEForm,
    'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group-e': ICSSoftSTORMNETSecurityLinkGroupEForm,
    'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role-e': ICSSoftSTORMNETSecurityLinkRoleEForm,
    'i-c-s-soft-s-t-o-r-m-n-e-t-security-operation-e': ICSSoftSTORMNETSecurityOperationEForm,
    'i-c-s-soft-s-t-o-r-m-n-e-t-security-permition-e': ICSSoftSTORMNETSecurityPermitionEForm,
    'i-c-s-soft-s-t-o-r-m-n-e-t-security-role-e': ICSSoftSTORMNETSecurityRoleEForm,
    'i-c-s-soft-s-t-o-r-m-n-e-t-security-user-e': ICSSoftSTORMNETSecurityUserEForm,
    'i-c-s-soft-s-t-o-r-m-n-e-t-security-view-e': ICSSoftSTORMNETSecurityViewEForm,
  },

});

export default translations;
