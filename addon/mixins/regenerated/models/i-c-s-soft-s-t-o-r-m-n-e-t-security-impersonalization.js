import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
  editor: DS.attr('string'),
  user: DS.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', { inverse: null, async: false }),
  agent: DS.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', { inverse: null, async: false })
});

export let ValidationRules = {
  createTime: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-impersonalization.validations.createTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  creator: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-impersonalization.validations.creator.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  editTime: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-impersonalization.validations.editTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  editor: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-impersonalization.validations.editor.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  user: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-impersonalization.validations.user.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  agent: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-impersonalization.validations.agent.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AuditView', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-impersonalization', {
    agent: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', 'Агент', {
      name: attr('Имя агента', { index: 1 }),
      login: attr('Логин агента', { index: 2 })
    }, { index: 0 }),
    user: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', 'Пользователь', {
      name: attr('Имя пользователя', { index: 4 }),
      login: attr('Логин пользователя', { index: 5 })
    }, { index: 3 })
  });

  modelClass.defineProjection('Sec_ImpersonalizationE', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-impersonalization', {
    user: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', 'Пользователь', {
      name: attr('Пользователь', { index: 1 })
    }, { index: 0 }),
    agent: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', 'Агент', {
      name: attr('Агент', { index: 3 })
    }, { index: 2 })
  });

  modelClass.defineProjection('Sec_ImpersonalizationL', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-impersonalization', {
    user: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', 'Пользователь', {
      name: attr('Пользователь', { index: 0 })
    }, { index: 2 }),
    agent: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', 'Агент', {
      name: attr('Агент', { index: 1 })
    }, { index: 3 }),
    createTime: attr('Дата создания', { index: 4 }),
    creator: attr('Создатель', { index: 5 }),
    editTime: attr('Дата изменения', { index: 6 }),
    editor: attr('Редактор', { index: 7 })
  });
};
