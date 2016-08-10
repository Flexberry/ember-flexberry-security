import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  startDate: DS.attr('date'),
  endDate: DS.attr('date'),
  createTime: DS.attr('string'),
  creator: DS.attr('string'),
  editTime: DS.attr('string'),
  editor: DS.attr('string'),
  role: DS.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', { inverse: null, async: false }),
  agent: DS.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', { inverse: null, async: false }),
  validations: {
    role: { presence: true },
    agent: { presence: true }
  },

});
export let defineProjections = function (model) {
  model.defineProjection('AuditView', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role', {
    startDate: Projection.attr('Дата начала'),
    endDate: Projection.attr('Дата окончания'),
    role: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', 'Роль', {
      name: Projection.attr('Имя роли')
    }),
    agent: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', 'Агент', {
      name: Projection.attr('Имя агента'),
      login: Projection.attr('Логин агента')
    })
  });
  model.defineProjection('GetParentRoles', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role', {
    agent: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', '', {
      name: Projection.attr(''),
      isRole: Projection.attr('')
    }),
    role: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', '', {
      name: Projection.attr(''),
      isRole: Projection.attr('')
    }),
    startDate: Projection.attr(''),
    endDate: Projection.attr('')
  });
  model.defineProjection('LinkedAgents', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role', {
    startDate: Projection.attr(''),
    endDate: Projection.attr(''),
    agent: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', '', {

    }),
    role: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', '', {

    })
  });
  model.defineProjection('SearchLinkRole', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role', {
    agent: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', '', {
      name: Projection.attr(''),
      login: Projection.attr(''),
      enabled: Projection.attr(''),
      isRole: Projection.attr(''),
      isUser: Projection.attr('')
    }),
    role: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', '', {
      name: Projection.attr(''),
      login: Projection.attr(''),
      isUser: Projection.attr(''),
      isRole: Projection.attr(''),
      enabled: Projection.attr('')
    }),
    startDate: Projection.attr(''),
    endDate: Projection.attr('')
  });
  model.defineProjection('Sec_GetRoles', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role', {
    role: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', 'Роль', {
      name: Projection.attr('Роль')
    }),
    agent: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', 'Агент', {
      name: Projection.attr('Агент'),
      login: Projection.attr('Логин')
    }),
    startDate: Projection.attr(''),
    endDate: Projection.attr('')
  });
  model.defineProjection('Sec_LinkRoleE', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role', {
    role: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', '', {
      name: Projection.attr('Роль')
    }),
    agent: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', '', {
      name: Projection.attr('Агент')
    }),
    startDate: Projection.attr(''),
    endDate: Projection.attr('')
  });
  model.defineProjection('Sec_LinkRoleL', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role', {
    role: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', 'Роль', {
      name: Projection.attr('Роль')
    }),
    agent: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', 'Агент', {
      name: Projection.attr('Агент'),
      login: Projection.attr('Логин')
    }),
    startDate: Projection.attr(''),
    endDate: Projection.attr(''),
    createTime: Projection.attr('Дата создания'),
    creator: Projection.attr('Создатель'),
    editTime: Projection.attr('Дата изменения'),
    editor: Projection.attr('Редактор')
  });
};
