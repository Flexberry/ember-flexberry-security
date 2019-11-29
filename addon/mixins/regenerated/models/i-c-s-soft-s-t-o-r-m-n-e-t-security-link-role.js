import Mixin from '@ember/object/mixin';
import DS from 'ember-data';
import { attr, belongsTo } from 'ember-flexberry-data/utils/attributes';
export let Model = Mixin.create({
  startDate: DS.attr('date'),
  endDate: DS.attr('date'),
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
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
    startDate: attr('Дата начала'),
    endDate: attr('Дата окончания'),
    role: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', 'Роль', {
      name: attr('Имя роли')
    }),
    agent: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', 'Агент', {
      name: attr('Имя агента'),
      login: attr('Логин агента')
    })
  });
  model.defineProjection('GetParentRoles', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role', {
    agent: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', '', {
      name: attr(''),
      isRole: attr('')
    }),
    role: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', '', {
      name: attr(''),
      isRole: attr('')
    }),
    startDate: attr(''),
    endDate: attr('')
  });
  model.defineProjection('LinkedAgents', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role', {
    startDate: attr(''),
    endDate: attr(''),
    agent: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', '', {

    }),
    role: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', '', {

    })
  });
  model.defineProjection('SearchLinkRole', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role', {
    agent: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', '', {
      name: attr(''),
      login: attr(''),
      enabled: attr(''),
      isRole: attr(''),
      isUser: attr('')
    }),
    role: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', '', {
      name: attr(''),
      login: attr(''),
      isUser: attr(''),
      isRole: attr(''),
      enabled: attr('')
    }),
    startDate: attr(''),
    endDate: attr('')
  });
  model.defineProjection('Sec_GetRoles', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role', {
    role: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', 'Роль', {
      name: attr('Роль')
    }),
    agent: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', 'Агент', {
      name: attr('Агент'),
      login: attr('Логин')
    }),
    startDate: attr(''),
    endDate: attr('')
  });
  model.defineProjection('Sec_LinkRoleE', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role', {
    role: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', '', {
      name: attr('Роль')
    }),
    agent: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', '', {
      name: attr('Агент')
    }),
    startDate: attr(''),
    endDate: attr('')
  });
  model.defineProjection('Sec_LinkRoleL', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role', {
    role: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', 'Роль', {
      name: attr('Роль')
    }),
    agent: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', 'Агент', {
      name: attr('Агент'),
      login: attr('Логин')
    }),
    startDate: attr(''),
    endDate: attr(''),
    createTime: attr('Дата создания'),
    creator: attr('Создатель'),
    editTime: attr('Дата изменения'),
    editor: attr('Редактор')
  });
};
