import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
  editor: DS.attr('string'),
  view: DS.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', { inverse: null, async: false }),
  attribute: DS.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', { inverse: null, async: false }),
  validations: {
    view: { presence: true },
    attribute: { presence: true }
  },

});
export let defineProjections = function (model) {
  model.defineProjection('AuditView', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-attribute', {
    view: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', 'Представление', {
      name: Projection.attr('Имя представления')
    }),
    attribute: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', 'Атрибут', {
      name: Projection.attr('Имя атрибута')
    })
  });
  model.defineProjection('Sec_LinkAttributeE', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-attribute', {
    attribute: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', '', {
      name: Projection.attr('Атрибут')
    }),
    view: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', '', {
      name: Projection.attr('Вид')
    })
  });
  model.defineProjection('Sec_LinkAttributeL', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-attribute', {
    attribute: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', 'Атрибут', {
      name: Projection.attr('Атрибут')
    }),
    view: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', 'Вид', {
      name: Projection.attr('Вид')
    }),
    createTime: Projection.attr('Дата создания'),
    creator: Projection.attr('Создатель'),
    editTime: Projection.attr('Дата изменения'),
    editor: Projection.attr('Редактор')
  });
};
