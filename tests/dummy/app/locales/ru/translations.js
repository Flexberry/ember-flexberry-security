import Ember from 'ember';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'Консоль безопасности',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
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
        'application-name': 'Консоль безопасности',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Консоль безопасности',
          title: ''
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
