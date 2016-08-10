import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  createTime: DS.attr('string'),
  creator: DS.attr('string'),
  editTime: DS.attr('string'),
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
    agent: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', 'Агент', {
      name: Projection.attr('Имя агента'),
      login: Projection.attr('Логин агента')
    }),
    user: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', 'Пользователь', {
      name: Projection.attr('Имя пользователя'),
      login: Projection.attr('Логин пользователя')
    })
  });
  model.defineProjection('Sec_ImpersonalizationE', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-impersonalization', {
    user: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', 'Пользователь', {
      name: Projection.attr('Пользователь')
    }),
    agent: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', 'Агент', {
      name: Projection.attr('Агент')
    })
  });
  model.defineProjection('Sec_ImpersonalizationL', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-impersonalization', {
    user: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', 'Пользователь', {
      name: Projection.attr('Пользователь')
    }),
    agent: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', 'Агент', {
      name: Projection.attr('Агент')
    }),
    createTime: Projection.attr('Дата создания'),
    creator: Projection.attr('Создатель'),
    editTime: Projection.attr('Дата изменения'),
    editor: Projection.attr('Редактор')
  });
};
