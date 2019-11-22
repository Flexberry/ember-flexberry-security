import Mixin from '@ember/object/mixin';
import DS from 'ember-data';
import { attr, belongsTo } from 'ember-flexberry-data/utils/attributes';
export let Model = Mixin.create({
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
  editor: DS.attr('string'),
  user: DS.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', { inverse: null, async: false }),
  agent: DS.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', { inverse: null, async: false }),
  validations: {
    user: { presence: true },
    agent: { presence: true }
  },

});
export let defineProjections = function (model) {
  model.defineProjection('AuditView', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-impersonalization', {
    agent: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', 'Агент', {
      name: attr('Имя агента'),
      login: attr('Логин агента')
    }),
    user: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', 'Пользователь', {
      name: attr('Имя пользователя'),
      login: attr('Логин пользователя')
    })
  });
  model.defineProjection('Sec_ImpersonalizationE', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-impersonalization', {
    user: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', 'Пользователь', {
      name: attr('Пользователь')
    }),
    agent: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', 'Агент', {
      name: attr('Агент')
    })
  });
  model.defineProjection('Sec_ImpersonalizationL', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-impersonalization', {
    user: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', 'Пользователь', {
      name: attr('Пользователь')
    }),
    agent: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', 'Агент', {
      name: attr('Агент')
    }),
    createTime: attr('Дата создания'),
    creator: attr('Создатель'),
    editTime: attr('Дата изменения'),
    editor: attr('Редактор')
  });
};
