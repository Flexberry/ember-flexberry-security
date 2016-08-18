import Ember from 'ember';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import ICSSoftSTORMNETBusinessAuditObjectsAuditEntityLForm from
'ember-flexberry-security/locales/ru/forms/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-l';
import ICSSoftSTORMNETBusinessAuditObjectsAuditEntityEForm from
'ember-flexberry-security/locales/ru/forms/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-e';
import ICSSoftSTORMNETBusinessAuditObjectsAgentModel from
'ember-flexberry-security/locales/ru/models/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-agent';
import ICSSoftSTORMNETBusinessAuditObjectsAuditEntityModel from
'ember-flexberry-security/locales/ru/models/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity';
import ICSSoftSTORMNETBusinessAuditObjectsAuditFieldModel from
'ember-flexberry-security/locales/ru/models/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-field';
import ICSSoftSTORMNETBusinessAuditObjectsAuditSessionModel from
'ember-flexberry-security/locales/ru/models/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-session';
import ICSSoftSTORMNETBusinessAuditObjectsLinkGroupModel from
'ember-flexberry-security/locales/ru/models/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-link-group';
import ICSSoftSTORMNETBusinessAuditObjectsObjectTypeModel from
'ember-flexberry-security/locales/ru/models/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-object-type';

import ICSSoftSTORMNETSecurityAccessLForm from 'ember-flexberry-security/locales/ru/forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-access-l';
import ICSSoftSTORMNETSecurityClassLForm from 'ember-flexberry-security/locales/ru/forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-class-l';
import ICSSoftSTORMNETSecurityGroupLForm from 'ember-flexberry-security/locales/ru/forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-group-l';
import ICSSoftSTORMNETSecurityLinkGroupLForm from 'ember-flexberry-security/locales/ru/forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group-l';
import ICSSoftSTORMNETSecurityLinkRoleLForm from 'ember-flexberry-security/locales/ru/forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role-l';
import ICSSoftSTORMNETSecurityOperationLForm from 'ember-flexberry-security/locales/ru/forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-operation-l';
import ICSSoftSTORMNETSecurityPermitionLForm from 'ember-flexberry-security/locales/ru/forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-permition-l';
import ICSSoftSTORMNETSecurityRoleLForm from 'ember-flexberry-security/locales/ru/forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-role-l';
import ICSSoftSTORMNETSecurityUserLForm from 'ember-flexberry-security/locales/ru/forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-user-l';
import ICSSoftSTORMNETSecurityViewLForm from 'ember-flexberry-security/locales/ru/forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-view-l';
import ICSSoftSTORMNETSecurityAccessEForm from 'ember-flexberry-security/locales/ru/forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-access-e';
import ICSSoftSTORMNETSecurityClassEForm from 'ember-flexberry-security/locales/ru/forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-class-e';
import ICSSoftSTORMNETSecurityGroupEForm from 'ember-flexberry-security/locales/ru/forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-group-e';
import ICSSoftSTORMNETSecurityLinkGroupEForm from 'ember-flexberry-security/locales/ru/forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group-e';
import ICSSoftSTORMNETSecurityLinkRoleEForm from 'ember-flexberry-security/locales/ru/forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role-e';
import ICSSoftSTORMNETSecurityOperationEForm from 'ember-flexberry-security/locales/ru/forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-operation-e';
import ICSSoftSTORMNETSecurityPermitionEForm from 'ember-flexberry-security/locales/ru/forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-permition-e';
import ICSSoftSTORMNETSecurityRoleEForm from 'ember-flexberry-security/locales/ru/forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-role-e';
import ICSSoftSTORMNETSecurityUserEForm from 'ember-flexberry-security/locales/ru/forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-user-e';
import ICSSoftSTORMNETSecurityViewEForm from 'ember-flexberry-security/locales/ru/forms/i-c-s-soft-s-t-o-r-m-n-e-t-security-view-e';
import ICSSoftSTORMNETSecurityAccessModel from 'ember-flexberry-security/locales/ru/models/i-c-s-soft-s-t-o-r-m-n-e-t-security-access';
import ICSSoftSTORMNETSecurityAgentModel from 'ember-flexberry-security/locales/ru/models/i-c-s-soft-s-t-o-r-m-n-e-t-security-agent';
import ICSSoftSTORMNETSecurityFilterModel from 'ember-flexberry-security/locales/ru/models/i-c-s-soft-s-t-o-r-m-n-e-t-security-filter';
import ICSSoftSTORMNETSecurityImpersonalizationModel from 'ember-flexberry-security/locales/ru/models/i-c-s-soft-s-t-o-r-m-n-e-t-security-impersonalization';
import ICSSoftSTORMNETSecurityLinkAttributeModel from 'ember-flexberry-security/locales/ru/models/i-c-s-soft-s-t-o-r-m-n-e-t-security-link-attribute';
import ICSSoftSTORMNETSecurityLinkGroupModel from 'ember-flexberry-security/locales/ru/models/i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group';
import ICSSoftSTORMNETSecurityLinkOperationModel from 'ember-flexberry-security/locales/ru/models/i-c-s-soft-s-t-o-r-m-n-e-t-security-link-operation';
import ICSSoftSTORMNETSecurityLinkRoleModel from 'ember-flexberry-security/locales/ru/models/i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role';
import ICSSoftSTORMNETSecurityLinkViewModel from 'ember-flexberry-security/locales/ru/models/i-c-s-soft-s-t-o-r-m-n-e-t-security-link-view';
import ICSSoftSTORMNETSecurityPermitionModel from 'ember-flexberry-security/locales/ru/models/i-c-s-soft-s-t-o-r-m-n-e-t-security-permition';
import ICSSoftSTORMNETSecuritySessionModel from 'ember-flexberry-security/locales/ru/models/i-c-s-soft-s-t-o-r-m-n-e-t-security-session';
import ICSSoftSTORMNETSecuritySubjectModel from 'ember-flexberry-security/locales/ru/models/i-c-s-soft-s-t-o-r-m-n-e-t-security-subject';

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

  'application-name': 'Dummy',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    login: {
      caption: 'Войти',
      back: 'Назад',
      login: 'Логин',
      password: 'Пароль',
      errors: {
        'empty-login': 'Логин не может быть пустым.',
        'empty-password': 'Пароль не может быть пустым.',
        'server-error': 'Не удалось получить ответ от сервера.',
        'incorrect-auth-data': 'Неверный логин или пароль.',
      },
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            caption: '',
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        }
      },

      footer: {
        'application-name': 'Dummy',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Dummy',
          title: 'Dummy'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'audit-forms': {
          caption: 'Audit forms',
          title: 'Audit forms',
          'i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-l': {
            caption: 'Audit form',
            title: 'Форма для просмотра всех записей по аудиту',

          }
        },
        полномочия: {
          caption: 'Полномочия',
          title: 'Полномочия',
          'i-c-s-soft-s-t-o-r-m-n-e-t-security-user-l': {
            caption: 'Пользователи',
            title: '',

          },
          'i-c-s-soft-s-t-o-r-m-n-e-t-security-role-l': {
            caption: 'Роли',
            title: '',

          },
          'i-c-s-soft-s-t-o-r-m-n-e-t-security-group-l': {
            caption: 'Группы',
            title: '',

          },
          'i-c-s-soft-s-t-o-r-m-n-e-t-security-class-l': {
            caption: 'Классы',
            title: '',

          },
          'i-c-s-soft-s-t-o-r-m-n-e-t-security-operation-l': {
            caption: 'Операции',
            title: '',

          },
          'i-c-s-soft-s-t-o-r-m-n-e-t-security-view-l': {
            caption: 'Представления',
            title: '',

          },
          'i-c-s-soft-s-t-o-r-m-n-e-t-security-permition-l': {
            caption: 'Разрешения',
            title: '',

          },
          'i-c-s-soft-s-t-o-r-m-n-e-t-security-access-l': {
            caption: 'Доступы',
            title: '',

          },
          'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group-l': {
            caption: 'Связи с группой',
            title: '',

          },
          'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role-l': {
            caption: 'Связи с ролью',
            title: '',

          }
        },
        application: {
          caption: 'Application',
          title: 'Application',
          'ember-flexberry-dummy-application-user-list': {
            caption: 'Application Users',
            title: '',

          },
          'ember-flexberry-dummy-localization-list': {
            caption: 'Localizations',
            title: '',

          },
          'ember-flexberry-dummy-suggestion-list': {
            caption: 'Suggestions',
            title: '',

          },
          'ember-flexberry-dummy-suggestion-type-list': {
            caption: 'Suggestion types',
            title: '',

          },
          'ember-flexberry-dummy-test-poly-child-list': {
            caption: 'TestPolyChildList',
            title: '',

          },
          'ember-flexberry-dummy-test-poly-list': {
            caption: 'TestPolyList',
            title: '',

          }
        },
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
