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
  operation: DS.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', { inverse: null, async: false }),
  class: DS.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', { inverse: null, async: false })
});

export let ValidationRules = {
  createTime: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-link-operation.validations.createTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  creator: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-link-operation.validations.creator.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  editTime: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-link-operation.validations.editTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  editor: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-link-operation.validations.editor.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  operation: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-link-operation.validations.operation.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  class: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-link-operation.validations.class.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AuditView', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-operation', {
    class: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', 'Класс', {
      name: attr('Имя класса', { index: 1 })
    }, { index: 0 }),
    operation: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', 'Операция', {
      name: attr('Имя операции', { index: 3 })
    }, { index: 2 })
  });

  modelClass.defineProjection('Sec_LinkOperationE', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-operation', {
    operation: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', '', {
      name: attr('Операция', { index: 1 })
    }, { index: 0 }),
    class: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', '', {
      name: attr('Класс', { index: 3 })
    }, { index: 2 })
  });

  modelClass.defineProjection('Sec_LinkOperationL', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-operation', {
    operation: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', 'Операция', {
      name: attr('Операция', { index: 0 })
    }, { index: 2 }),
    class: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', 'Класс', {
      name: attr('Класс', { index: 1 })
    }, { index: 3 }),
    createTime: attr('Дата создания', { index: 4 }),
    creator: attr('Создатель', { index: 5 }),
    editTime: attr('Дата изменения', { index: 6 }),
    editor: attr('Редактор', { index: 7 })
  });
};
