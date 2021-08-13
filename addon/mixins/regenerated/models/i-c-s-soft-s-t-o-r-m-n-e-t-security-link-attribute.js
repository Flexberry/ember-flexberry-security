import Mixin from '@ember/object/mixin';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
  editor: DS.attr('string'),
  view: DS.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', { inverse: null, async: false }),
  attribute: DS.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', { inverse: null, async: false })
});

export let ValidationRules = {
  createTime: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-link-attribute.validations.createTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  creator: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-link-attribute.validations.creator.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  editTime: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-link-attribute.validations.editTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  editor: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-link-attribute.validations.editor.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  view: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-link-attribute.validations.view.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  attribute: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-link-attribute.validations.attribute.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AuditView', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-attribute', {
    view: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', 'Представление', {
      name: attr('Имя представления', { index: 1 })
    }, { index: 0 }),
    attribute: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', 'Атрибут', {
      name: attr('Имя атрибута', { index: 3 })
    }, { index: 2 })
  });

  modelClass.defineProjection('Sec_LinkAttributeE', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-attribute', {
    attribute: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', '', {
      name: attr('Атрибут', { index: 1 })
    }, { index: 0 }),
    view: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', '', {
      name: attr('Вид', { index: 3 })
    }, { index: 2 })
  });

  modelClass.defineProjection('Sec_LinkAttributeL', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-attribute', {
    attribute: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', 'Атрибут', {
      name: attr('Атрибут', { index: 0 })
    }, { index: 3 }),
    view: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', 'Вид', {
      name: attr('Вид', { index: 1 })
    }, { index: 2 }),
    createTime: attr('Дата создания', { index: 4 }),
    creator: attr('Создатель', { index: 5 }),
    editTime: attr('Дата изменения', { index: 6 }),
    editor: attr('Редактор', { index: 7 })
  });
};
