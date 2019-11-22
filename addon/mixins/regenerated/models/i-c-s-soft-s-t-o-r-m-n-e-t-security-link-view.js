import Mixin from '@ember/object/mixin';
import DS from 'ember-data';
import { attr, belongsTo } from 'ember-flexberry-data/utils/attributes';
export let Model = Mixin.create({
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
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
    class: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', 'Класс', {
      name: attr('Имя класса')
    }),
    view: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', 'Представление', {
      name: attr('Имя представления')
    })
  });
  model.defineProjection('Sec_LinkViewE', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-view', {
    view: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', '', {
      name: attr('Вид')
    }),
    class: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', '', {
      name: attr('Класс')
    })
  });
  model.defineProjection('Sec_LinkViewL', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-view', {
    view: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', 'Вид', {
      name: attr('Вид')
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
