import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  startDate: DS.attr('date'),
  endDate: DS.attr('date'),
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
  editor: DS.attr('string'),
  role: DS.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', { inverse: null, async: false }),
  agent: DS.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', { inverse: null, async: false })
});

export let ValidationRules = {
  startDate: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role.validations.startDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  endDate: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role.validations.endDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  createTime: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role.validations.createTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  creator: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role.validations.creator.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  editTime: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role.validations.editTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  editor: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role.validations.editor.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  role: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role.validations.role.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  agent: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role.validations.agent.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AuditView', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role', {
    startDate: attr('Дата начала', { index: 0 }),
    endDate: attr('Дата окончания', { index: 1 }),
    role: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', 'Роль', {
      name: attr('Имя роли', { index: 3 })
    }, { index: 2 }),
    agent: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', 'Агент', {
      name: attr('Имя агента', { index: 5 }),
      login: attr('Логин агента', { index: 6 })
    }, { index: 4 })
  });

  modelClass.defineProjection('GetParentRoles', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role', {
    agent: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', '', {
      name: attr('', { index: 2 }),
      isRole: attr('', { index: 3 })
    }, { index: 0 }),
    role: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', '', {
      name: attr('', { index: 4 }),
      isRole: attr('', { index: 5 })
    }, { index: 1 }),
    startDate: attr('', { index: 6 }),
    endDate: attr('', { index: 7 })
  });

  modelClass.defineProjection('LinkedAgents', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role', {
    startDate: attr('', { index: 0 }),
    endDate: attr('', { index: 1 }),
    agent: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', '', {

    }, { index: 2 }),
    role: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', '', {

    }, { index: 3 })
  });

  modelClass.defineProjection('SearchLinkRole', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role', {
    agent: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', '', {
      name: attr('', { index: 1 }),
      login: attr('', { index: 2 }),
      enabled: attr('', { index: 3 }),
      isRole: attr('', { index: 4 }),
      isUser: attr('', { index: 5 })
    }, { index: 0 }),
    role: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', '', {
      name: attr('', { index: 7 }),
      login: attr('', { index: 8 }),
      isUser: attr('', { index: 9 }),
      isRole: attr('', { index: 10 }),
      enabled: attr('', { index: 11 })
    }, { index: 6 }),
    startDate: attr('', { index: 12 }),
    endDate: attr('', { index: 13 })
  });

  modelClass.defineProjection('Sec_GetRoles', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role', {
    role: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', 'Роль', {
      name: attr('Роль', { index: 0 })
    }, { index: 4 }),
    agent: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', 'Агент', {
      name: attr('Агент', { index: 1 }),
      login: attr('Логин', { index: 2 })
    }, { index: 3 }),
    startDate: attr('', { index: 5 }),
    endDate: attr('', { index: 6 })
  });

  modelClass.defineProjection('Sec_LinkRoleE', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role', {
    role: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', '', {
      name: attr('Роль', { index: 1 })
    }, { index: 0 }),
    agent: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', '', {
      name: attr('Агент', { index: 3 })
    }, { index: 2 }),
    startDate: attr('', { index: 4 }),
    endDate: attr('', { index: 5 })
  });

  modelClass.defineProjection('Sec_LinkRoleL', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role', {
    role: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', 'Роль', {
      name: attr('Роль', { index: 0 })
    }, { index: 4 }),
    agent: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', 'Агент', {
      name: attr('Агент', { index: 1 }),
      login: attr('Логин', { index: 2 })
    }, { index: 3 }),
    startDate: attr('', { index: 5 }),
    endDate: attr('', { index: 6 }),
    createTime: attr('Дата создания', { index: 7 }),
    creator: attr('Создатель', { index: 8 }),
    editTime: attr('Дата изменения', { index: 9 }),
    editor: attr('Редактор', { index: 10 })
  });
};
