import Mixin from '@ember/object/mixin';
import DS from 'ember-data';
import { attr, belongsTo } from 'ember-flexberry-data/utils/attributes';
export let Model = Mixin.create({
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
    view: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', 'Представление', {
      name: attr('Имя представления')
    }),
    attribute: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', 'Атрибут', {
      name: attr('Имя атрибута')
    })
  });
  model.defineProjection('Sec_LinkAttributeE', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-attribute', {
    attribute: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', '', {
      name: attr('Атрибут')
    }),
    view: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', '', {
      name: attr('Вид')
    })
  });
  model.defineProjection('Sec_LinkAttributeL', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-attribute', {
    attribute: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', 'Атрибут', {
      name: attr('Атрибут')
    }),
    view: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', 'Вид', {
      name: attr('Вид')
    }),
    createTime: attr('Дата создания'),
    creator: attr('Создатель'),
    editTime: attr('Дата изменения'),
    editor: attr('Редактор')
  });
};
