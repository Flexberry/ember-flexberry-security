import Mixin from '@ember/object/mixin';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
  editor: DS.attr('string'),
  agent: DS.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', { inverse: null, async: false }),
  subject: DS.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', { inverse: null, async: false }),
  access: DS.hasMany('i-c-s-soft-s-t-o-r-m-n-e-t-security-access', { inverse: 'permition', async: false })
});

export let ValidationRules = {
  createTime: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-permition.validations.createTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  creator: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-permition.validations.creator.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  editTime: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-permition.validations.editTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  editor: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-permition.validations.editor.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  agent: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-permition.validations.agent.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  subject: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-permition.validations.subject.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  access: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-permition.validations.access.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AuditView', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-permition', {
    agent: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', 'Агент', {
      name: attr('Имя агента', { index: 1 }),
      login: attr('Логин агента', { index: 2 })
    }, { index: 0 }),
    subject: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', 'Субъект', {
      name: attr('Имя субъекта', { index: 4 })
    }, { index: 3 }),
    access: hasMany('i-c-s-soft-s-t-o-r-m-n-e-t-security-access', 'Access', {
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
    })
  });

  modelClass.defineProjection('CheckAccessOnObject', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-permition', {
    subject: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', '', {
      isAttribute: attr('', { index: 1 }),
      isOperation: attr('', { index: 2 }),
      isView: attr('', { index: 3 }),
      isClass: attr('', { index: 4 }),
      name: attr('', { index: 5 })
    }, { index: 0 }),
    agent: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', '', {
      name: attr('', { index: 7 }),
      login: attr('', { index: 8 }),
      isUser: attr('', { index: 9 }),
      isGroup: attr('', { index: 10 }),
      isRole: attr('', { index: 11 })
    }, { index: 6 }),
    access: hasMany('i-c-s-soft-s-t-o-r-m-n-e-t-security-access', '', {
      filter: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-filter', '', {
        filterText: attr('', { index: 1 }),
        name: attr('', { index: 2 })
      }, { index: 0 }),
      typeAccess: attr('', { index: 3 })
    })
  });

  modelClass.defineProjection('CheckAccessOperation', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-permition', {
    subject: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', '', {
      name: attr('', { index: 0 }),
      isOperation: attr('', { index: 1 })
    }, { index: -1, hidden: true }),
    agent: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', '', {

    }, { index: 2 })
  });

  modelClass.defineProjection('Sec_CheckClasses', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-permition', {
    subject: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', '', {
      name: attr('', { index: 1 }),
      isOperation: attr('', { index: 2 }),
      isClass: attr('', { index: 3 })
    }, { index: 0 }),
    agent: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', '', {
      name: attr('', { index: 5 }),
      login: attr('', { index: 6 }),
      isUser: attr('', { index: 7 }),
      isRole: attr('', { index: 8 })
    }, { index: 4 })
  });

  modelClass.defineProjection('Sec_CheckClassesAndGetDetails', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-permition', {
    subject: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', '', {
      name: attr('', { index: 1 }),
      isOperation: attr('', { index: 2 }),
      isClass: attr('', { index: 3 })
    }, { index: 0 }),
    agent: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', '', {
      name: attr('', { index: 5 }),
      login: attr('', { index: 6 }),
      isUser: attr('', { index: 7 }),
      isRole: attr('', { index: 8 })
    }, { index: 4 }),
    access: hasMany('i-c-s-soft-s-t-o-r-m-n-e-t-security-access', 'Доступ', {
      typeAccess: attr('Тип доступа', { index: 0 })
    })
  });

  modelClass.defineProjection('Sec_PermitionE', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-permition', {
    agent: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', 'Агент', {
      name: attr('', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'name' }),
    subject: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', 'Субъект', {
      name: attr('', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'name' }),
    access: hasMany('i-c-s-soft-s-t-o-r-m-n-e-t-security-access', 'Доступ', {
      typeAccess: attr('Тип доступа', { index: 0 })
    })
  });

  modelClass.defineProjection('Sec_PermitionL', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-permition', {
    subject: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', '', {
      name: attr('Субъект', { index: 2 })
    }, { index: 0, hidden: true }),
    agent: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', '', {
      name: attr('Агент', { index: 3 }),
      isUser: attr('Юзер', { index: 4 }),
      isGroup: attr('Группа', { index: 5 }),
      isRole: attr('Роль', { index: 6 })
    }, { index: 1, hidden: true }),
    createTime: attr('Дата создания', { index: 7 }),
    creator: attr('Создатель', { index: 8 }),
    editTime: attr('Дата изменения', { index: 9 }),
    editor: attr('Редактор', { index: 10 })
  });
};
