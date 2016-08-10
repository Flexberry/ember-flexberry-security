import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  createTime: DS.attr('string'),
  creator: DS.attr('string'),
  editTime: DS.attr('string'),
  editor: DS.attr('string'),
  operation: DS.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', { inverse: null, async: false }),
  class: DS.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', { inverse: null, async: false }),
  validations: {
    operation: { presence: true },
    class: { presence: true }
  },

});
export let defineProjections = function (model) {
  model.defineProjection('AuditView', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-operation', {
    class: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', 'Класс', {
      name: Projection.attr('Имя класса')
    }),
    operation: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', 'Операция', {
      name: Projection.attr('Имя операции')
    })
  });
  model.defineProjection('Sec_LinkOperationE', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-operation', {
    operation: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', '', {
      name: Projection.attr('Операция')
    }),
    class: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', '', {
      name: Projection.attr('Класс')
    })
  });
  model.defineProjection('Sec_LinkOperationL', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-operation', {
    operation: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', 'Операция', {
      name: Projection.attr('Операция')
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
