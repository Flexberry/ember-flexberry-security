import Mixin from '@ember/object/mixin';
import DS from 'ember-data';
import { attr, belongsTo } from 'ember-flexberry-data/utils/attributes';
export let Model = Mixin.create({
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
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
    class: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', 'Класс', {
      name: attr('Имя класса')
    }),
    operation: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', 'Операция', {
      name: attr('Имя операции')
    })
  });
  model.defineProjection('Sec_LinkOperationE', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-operation', {
    operation: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', '', {
      name: attr('Операция')
    }),
    class: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', '', {
      name: attr('Класс')
    })
  });
  model.defineProjection('Sec_LinkOperationL', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-operation', {
    operation: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', 'Операция', {
      name: attr('Операция')
    }),
    class: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', 'Класс', {
      name: attr('Класс')
    }),
    createTime: attr('Дата создания'),
    creator: attr('Создатель'),
    editTime: attr('Дата изменения'),
    editor: attr('Редактор')
  });
};
