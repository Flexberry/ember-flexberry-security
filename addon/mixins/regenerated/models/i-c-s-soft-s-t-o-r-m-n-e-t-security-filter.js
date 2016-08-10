import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  filterText: DS.attr('string'),
  name: DS.attr('string'),
  filterTypeNView: DS.attr('string'),
  createTime: DS.attr('string'),
  creator: DS.attr('string'),
  editTime: DS.attr('string'),
  editor: DS.attr('string'),
  subject: DS.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', { inverse: null, async: false }),
  validations: {

  },

});
export let defineProjections = function (model) {
  model.defineProjection('AuditView', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-filter', {
    filterText: Projection.attr('Filter text'),
    name: Projection.attr('Name'),
    filterTypeNView: Projection.attr('Filter type n view'),
    subject: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', 'Subject', {
      name: Projection.attr('Name')
    })
  });
  model.defineProjection('Sec_FilterE', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-filter', {
    name: Projection.attr('Наименование'),
    filterText: Projection.attr('', { hidden: true }),
    subject: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', 'Объект', {
      name: Projection.attr('Название объекта')
    }, { displayMemberPath: 'name' }),
    filterTypeNView: Projection.attr('')
  });
  model.defineProjection('Sec_FilterL', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-filter', {
    name: Projection.attr(''),
    createTime: Projection.attr('Дата создания'),
    creator: Projection.attr('Создатель'),
    editTime: Projection.attr('Дата изменения'),
    editor: Projection.attr('Редактор')
  });
};
