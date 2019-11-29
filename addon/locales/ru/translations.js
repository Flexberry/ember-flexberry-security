import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';
import $ from 'jquery';

import ICSSoftSTORMNETBusinessAuditObjectsAuditEntityLForm from
'./forms/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-l';
import ICSSoftSTORMNETBusinessAuditObjectsAuditEntityEForm from
'./forms/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-e';
import ICSSoftSTORMNETBusinessAuditObjectsAuditEntityModel from
'./models/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity';
import ICSSoftSTORMNETBusinessAuditObjectsAuditFieldModel from
'./models/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-field';
import ICSSoftSTORMNETBusinessAuditObjectsObjectTypeModel from
'./models/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-object-type';

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
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity': ICSSoftSTORMNETBusinessAuditObjectsAuditEntityModel,
    'i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-field': ICSSoftSTORMNETBusinessAuditObjectsAuditFieldModel,
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
  },

  forms: {
    application: {
      sitemap: {
        'audit-forms': {
          caption: 'Аудит',
          title: 'Формы аудита',
          'i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-l': {
            caption: 'Аудит',
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
      }
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
  },

});

export default translations;
