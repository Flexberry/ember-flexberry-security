import Mixin from '@ember/object/mixin';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  typeAccess: DS.attr('i-c-s-soft-s-t-o-r-m-n-e-t-security-t-type-access'),
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
  editor: DS.attr('string'),
  filter: DS.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-filter', { inverse: null, async: false }),
  permition: DS.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-permition', { inverse: 'access', async: false })
});

export let ValidationRules = {
  typeAccess: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-access.validations.typeAccess.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  createTime: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-access.validations.createTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  creator: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-access.validations.creator.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  editTime: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-access.validations.editTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  editor: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-access.validations.editor.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  filter: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-access.validations.filter.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  permition: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-access.validations.permition.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AuditView', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-access', {
    typeAccess: attr('Тип доступа', { index: 0 }),
    filter: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-filter', 'Фильтр', {
      name: attr('Имя фильтра', { index: 2 }),
      filterText: attr('Заголовок фильтра', { index: 3, hidden: true })
    }, { index: 1, displayMemberPath: 'filterText' }),
    permition: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-permition', 'Разрешение', {
      agent: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', '', {
        name: attr('Имя агента', { index: 5 }),
        login: attr('Логи агента', { index: 6 })
      }, { index: -1, hidden: true }),
      subject: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', '', {
        name: attr('Имя субъекта', { index: 7 })
      }, { index: -1, hidden: true })
    }, { index: 4 })
  });

  modelClass.defineProjection('CheckAccessClass', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-access', {
    typeAccess: attr('', { index: 0 }),
    permition: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-permition', '', {
      subject: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', '', {
        name: attr('', { index: 3 })
      }, { index: 2 }),
      agent: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', '', {

      }, { index: 4 })
    }, { index: 1 }),
    filter: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-filter', '', {
      filterText: attr('', { index: 5 })
    }, { index: -1, hidden: true })
  });

  modelClass.defineProjection('CheckAccessOnObject', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-access', {
    filter: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-filter', '', {
      filterText: attr('', { index: 1 }),
      name: attr('', { index: 2 })
    }, { index: 0 }),
    typeAccess: attr('', { index: 3 })
  });

  modelClass.defineProjection('Sec_AccessD', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-access', {
    typeAccess: attr('Тип доступа', { index: 0 })
  });

  modelClass.defineProjection('Sec_AccessE', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-access', {
    permition: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-permition', '~', {
      agent: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', '', {
        name: attr('Агент', { index: 2 })
      }, { index: 1, hidden: true }),
      subject: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', '', {
        name: attr('Субъект', { index: 4 }),
        isClass: attr('', { index: 5, hidden: true }),
        isOperation: attr('', { index: 6, hidden: true })
      }, { index: 3, hidden: true })
    }, { index: 0 }),
    typeAccess: attr('Тип доступа', { index: 7 }),
    filter: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-filter', '~', {
      name: attr('Имя фильтра', { index: 9 })
    }, { index: 8, displayMemberPath: 'name' })
  });

  modelClass.defineProjection('Sec_AccessL', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-access', {
    permition: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-permition', '', {
      agent: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', '', {
        name: attr('Агент', { index: 1 })
      }, { index: -1, hidden: true }),
      subject: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', '', {
        name: attr('Субъект', { index: 2 })
      }, { index: -1, hidden: true })
    }, { index: 0, hidden: true }),
    typeAccess: attr('Тип доступа', { index: 3 }),
    filter: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-filter', 'Фильтр', {
      name: attr('Фильтр', { index: 4 })
    }, { index: -1, hidden: true }),
    createTime: attr('Дата создания', { index: 5 }),
    creator: attr('Создатель', { index: 6 }),
    editTime: attr('Дата изменения', { index: 7 }),
    editor: attr('Редактор', { index: 8 })
  });
};
