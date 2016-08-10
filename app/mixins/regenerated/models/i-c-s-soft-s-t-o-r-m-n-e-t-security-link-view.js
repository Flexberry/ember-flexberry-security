import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  createTime: DS.attr('string'),
  creator: DS.attr('string'),
  editTime: DS.attr('string'),
  editor: DS.attr('string'),
  view: DS.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', { inverse: null, async: false }),
  class: DS.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', { inverse: null, async: false }),
  validations: {
    view: { presence: true },
    class: { presence: true }
  },

});
export let defineProjections = function (model) {
  model.defineProjection('AuditView', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-view', {
    class: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', 'Класс', {
      name: Projection.attr('Имя класса')
    }),
    view: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', 'Представление', {
      name: Projection.attr('Имя представления')
    })
  });
  model.defineProjection('Sec_LinkViewE', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-view', {
    view: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', '', {
      name: Projection.attr('Вид')
    }),
    class: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', '', {
      name: Projection.attr('Класс')
    })
  });
  model.defineProjection('Sec_LinkViewL', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-view', {
    view: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', 'Вид', {
      name: Projection.attr('Вид')
    }),
    class: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', 'Класс', {
      name: Projection.attr('Класс')
    }),
    createTime: Projection.attr('Дата создания'),
    creator: Projection.attr('Создатель'),
    editTime: Projection.attr('Дата изменения'),
    editor: Projection.attr('Редактор')
  });
};
