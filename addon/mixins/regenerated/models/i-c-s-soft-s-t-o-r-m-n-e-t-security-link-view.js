import Mixin from '@ember/object/mixin';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
  editor: DS.attr('string'),
  view: DS.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', { inverse: null, async: false }),
  class: DS.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', { inverse: null, async: false })
});

export let ValidationRules = {
  createTime: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-link-view.validations.createTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  creator: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-link-view.validations.creator.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  editTime: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-link-view.validations.editTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  editor: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-link-view.validations.editor.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  view: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-link-view.validations.view.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  class: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-link-view.validations.class.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AuditView', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-view', {
    class: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', 'Класс', {
      name: attr('Имя класса', { index: 1 })
    }, { index: 0 }),
    view: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', 'Представление', {
      name: attr('Имя представления', { index: 3 })
    }, { index: 2 })
  });

  modelClass.defineProjection('Sec_LinkViewE', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-view', {
    view: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', '', {
      name: attr('Вид', { index: 1 })
    }, { index: 0 }),
    class: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', '', {
      name: attr('Класс', { index: 3 })
    }, { index: 2 })
  });

  modelClass.defineProjection('Sec_LinkViewL', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-view', {
    view: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', 'Вид', {
      name: attr('Вид', { index: 0 })
    }, { index: 3 }),
    class: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', 'Класс', {
      name: attr('Класс', { index: 1 })
    }, { index: 2 }),
    createTime: attr('Дата создания', { index: 4 }),
    creator: attr('Создатель', { index: 5 }),
    editTime: attr('Дата изменения', { index: 6 }),
    editor: attr('Редактор', { index: 7 })
  });
};
