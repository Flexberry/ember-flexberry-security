import Mixin from '@ember/object/mixin';
import DS from 'ember-data';
import { attr, belongsTo } from 'ember-flexberry-data/utils/attributes';
export let Model = Mixin.create({
  filterText: DS.attr('string'),
  name: DS.attr('string'),
  filterTypeNView: DS.attr('string'),
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
  editor: DS.attr('string'),
  subject: DS.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', { inverse: null, async: false }),
  validations: {

  },

});
export let defineProjections = function (model) {
  model.defineProjection('AuditView', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-filter', {
    filterText: attr('Filter text'),
    name: attr('Name'),
    filterTypeNView: attr('Filter type n view'),
    subject: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', 'Subject', {
      name: attr('Name')
    })
  });
  model.defineProjection('Sec_FilterE', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-filter', {
    name: attr('Наименование'),
    filterText: attr('', { hidden: true }),
    subject: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', 'Объект', {
      name: attr('Название объекта')
    }, { displayMemberPath: 'name' }),
    filterTypeNView: attr('')
  });
  model.defineProjection('Sec_FilterL', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-filter', {
    name: attr(''),
    createTime: attr('Дата создания'),
    creator: attr('Создатель'),
    editTime: attr('Дата изменения'),
    editor: attr('Редактор')
  });
};
