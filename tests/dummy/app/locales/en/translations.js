import Ember from 'ember';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import ICSSoftSTORMNETBusinessAuditObjectsAuditEntityLForm from
'ember-flexberry-security/locales/en/forms/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-l';
import ICSSoftSTORMNETBusinessAuditObjectsAuditEntityEForm from
'ember-flexberry-security/locales/en/forms/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-e';
import ICSSoftSTORMNETBusinessAuditObjectsAgentModel from
'ember-flexberry-security/locales/en/models/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-agent';
import ICSSoftSTORMNETBusinessAuditObjectsAuditEntityModel from
'ember-flexberry-security/locales/en/models/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity';
import ICSSoftSTORMNETBusinessAuditObjectsAuditFieldModel from
'ember-flexberry-security/locales/en/models/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-field';
import ICSSoftSTORMNETBusinessAuditObjectsAuditSessionModel from
'ember-flexberry-security/locales/en/models/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-session';
import ICSSoftSTORMNETBusinessAuditObjectsLinkGroupModel from
'ember-flexberry-security/locales/en/models/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-link-group';
import ICSSoftSTORMNETBusinessAuditObjectsObjectTypeModel from
'ember-flexberry-security/locales/en/models/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-object-type';

import ICSSoftSTORMNETSecurityAccessLForm from 'ember-flexberry-security/locales/en/forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-access-l';
import ICSSoftSTORMNETSecurityClassLForm from 'ember-flexberry-security/locales/en/forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-class-l';
import ICSSoftSTORMNETSecurityGroupLForm from 'ember-flexberry-security/locales/en/forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-group-l';
import ICSSoftSTORMNETSecurityLinkGroupLForm from 'ember-flexberry-security/locales/en/forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group-l';
import ICSSoftSTORMNETSecurityLinkRoleLForm from 'ember-flexberry-security/locales/en/forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role-l';
import ICSSoftSTORMNETSecurityOperationLForm from 'ember-flexberry-security/locales/en/forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-operation-l';
import ICSSoftSTORMNETSecurityPermitionLForm from 'ember-flexberry-security/locales/en/forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-permition-l';
import ICSSoftSTORMNETSecurityRoleLForm from 'ember-flexberry-security/locales/en/forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-role-l';
import ICSSoftSTORMNETSecurityUserLForm from 'ember-flexberry-security/locales/en/forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-user-l';
import ICSSoftSTORMNETSecurityViewLForm from 'ember-flexberry-security/locales/en/forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-view-l';
import ICSSoftSTORMNETSecurityAccessEForm from 'ember-flexberry-security/locales/en/forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-access-e';
import ICSSoftSTORMNETSecurityClassEForm from 'ember-flexberry-security/locales/en/forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-class-e';
import ICSSoftSTORMNETSecurityGroupEForm from 'ember-flexberry-security/locales/en/forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-group-e';
import ICSSoftSTORMNETSecurityLinkGroupEForm from 'ember-flexberry-security/locales/en/forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group-e';
import ICSSoftSTORMNETSecurityLinkRoleEForm from 'ember-flexberry-security/locales/en/forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role-e';
import ICSSoftSTORMNETSecurityOperationEForm from 'ember-flexberry-security/locales/en/forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-operation-e';
import ICSSoftSTORMNETSecurityPermitionEForm from 'ember-flexberry-security/locales/en/forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-permition-e';
import ICSSoftSTORMNETSecurityRoleEForm from 'ember-flexberry-security/locales/en/forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-role-e';
import ICSSoftSTORMNETSecurityUserEForm from 'ember-flexberry-security/locales/en/forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-user-e';
import ICSSoftSTORMNETSecurityViewEForm from 'ember-flexberry-security/locales/en/forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-view-e';
import ICSSoftSTORMNETSecurityAccessModel from 'ember-flexberry-security/locales/en/models/i-c-s-soft-s-t-o-r-m-n-e-t-security-access';
import ICSSoftSTORMNETSecurityAgentModel from 'ember-flexberry-security/locales/en/models/i-c-s-soft-s-t-o-r-m-n-e-t-security-agent';
import ICSSoftSTORMNETSecurityFilterModel from 'ember-flexberry-security/locales/en/models/i-c-s-soft-s-t-o-r-m-n-e-t-security-filter';
import ICSSoftSTORMNETSecurityImpersonalizationModel from 'ember-flexberry-security/locales/en/models/i-c-s-soft-s-t-o-r-m-n-e-t-security-impersonalization';
import ICSSoftSTORMNETSecurityLinkAttributeModel from 'ember-flexberry-security/locales/en/models/i-c-s-soft-s-t-o-r-m-n-e-t-security-link-attribute';
import ICSSoftSTORMNETSecurityLinkGroupModel from 'ember-flexberry-security/locales/en/models/i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group';
import ICSSoftSTORMNETSecurityLinkOperationModel from 'ember-flexberry-security/locales/en/models/i-c-s-soft-s-t-o-r-m-n-e-t-security-link-operation';
import ICSSoftSTORMNETSecurityLinkRoleModel from 'ember-flexberry-security/locales/en/models/i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role';
import ICSSoftSTORMNETSecurityLinkViewModel from 'ember-flexberry-security/locales/en/models/i-c-s-soft-s-t-o-r-m-n-e-t-security-link-view';
import ICSSoftSTORMNETSecurityPermitionModel from 'ember-flexberry-security/locales/en/models/i-c-s-soft-s-t-o-r-m-n-e-t-security-permition';
import ICSSoftSTORMNETSecuritySessionModel from 'ember-flexberry-security/locales/en/models/i-c-s-soft-s-t-o-r-m-n-e-t-security-session';
import ICSSoftSTORMNETSecuritySubjectModel from 'ember-flexberry-security/locales/en/models/i-c-s-soft-s-t-o-r-m-n-e-t-security-subject';

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
Ember.$.extend(true, translations, EmberFlexberryTranslations);

Ember.$.extend(true, translations, {
  models: {
    'i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-agent': ICSSoftSTORMNETBusinessAuditObjectsAgentModel,
    'i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity': ICSSoftSTORMNETBusinessAuditObjectsAuditEntityModel,
    'i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-field': ICSSoftSTORMNETBusinessAuditObjectsAuditFieldModel,
    'i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-session': ICSSoftSTORMNETBusinessAuditObjectsAuditSessionModel,
    'i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-link-group': ICSSoftSTORMNETBusinessAuditObjectsLinkGroupModel,
    'i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-object-type': ICSSoftSTORMNETBusinessAuditObjectsObjectTypeModel,

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

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
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
        'audit-forms': {
          caption: 'audit-forms',
          title: 'audit-forms',
          'i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-l': {
            caption: 'i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-l',
            title: 'i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-l',

          }
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
    'i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-l': ICSSoftSTORMNETBusinessAuditObjectsAuditEntityLForm,
    'i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-e': ICSSoftSTORMNETBusinessAuditObjectsAuditEntityEForm,

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
