import Mixin from '@ember/object/mixin';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  filterText: DS.attr('string'),
  name: DS.attr('string'),
  filterTypeNView: DS.attr('string'),
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
  editor: DS.attr('string'),
  subject: DS.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', { inverse: null, async: false })
});

export let ValidationRules = {
  filterText: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-filter.validations.filterText.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  name: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-filter.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  filterTypeNView: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-filter.validations.filterTypeNView.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  createTime: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-filter.validations.createTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  creator: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-filter.validations.creator.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  editTime: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-filter.validations.editTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  editor: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-filter.validations.editor.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  subject: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-filter.validations.subject.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AuditView', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-filter', {
    filterText: attr('Filter text', { index: 0 }),
    name: attr('Name', { index: 1 }),
    filterTypeNView: attr('Filter type n view', { index: 2 }),
    subject: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', 'Subject', {
      name: attr('Name', { index: 4 })
    }, { index: 3 })
  });

  modelClass.defineProjection('Sec_FilterE', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-filter', {
    name: attr('Наименование', { index: 0 }),
    filterText: attr('', { index: 1, hidden: true }),
    subject: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', 'Объект', {
      name: attr('Название объекта', { index: 3 })
    }, { index: 2, displayMemberPath: 'name' }),
    filterTypeNView: attr('', { index: 4 })
  });

  modelClass.defineProjection('Sec_FilterL', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-filter', {
    name: attr('', { index: 0 }),
    createTime: attr('Дата создания', { index: 1 }),
    creator: attr('Создатель', { index: 2 }),
    editTime: attr('Дата изменения', { index: 3 }),
    editor: attr('Редактор', { index: 4 })
  });
};
