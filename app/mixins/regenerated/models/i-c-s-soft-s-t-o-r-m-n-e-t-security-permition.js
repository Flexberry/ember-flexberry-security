import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  createTime: DS.attr('string'),
  creator: DS.attr('string'),
  editTime: DS.attr('string'),
  editor: DS.attr('string'),
  agent: DS.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', { inverse: null, async: false }),
  subject: DS.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', { inverse: null, async: false }),
  access: DS.hasMany('i-c-s-soft-s-t-o-r-m-n-e-t-security-access', { inverse: 'permition', async: false }),
  validations: {
    agent: { presence: true },
    subject: { presence: true }
  },

});
export let defineProjections = function (model) {
  model.defineProjection('AuditView', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-permition', {
    agent: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', 'Агент', {
      name: Projection.attr('Имя агента'),
      login: Projection.attr('Логин агента')
    }),
    subject: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', 'Субъект', {
      name: Projection.attr('Имя субъекта')
    }),
    access: Projection.hasMany('i-c-s-soft-s-t-o-r-m-n-e-t-security-access', 'Access', {
      typeAccess: Projection.attr('Тип доступа'),
      filter: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-filter', 'Фильтр', {
        name: Projection.attr('Имя фильтра'),
        filterText: Projection.attr('Заголовок фильтра', { hidden: true })
      }, { displayMemberPath: 'filterText' }),
      permition: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-permition', 'Разрешение', {
        agent: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', '', {
          name: Projection.attr('Имя агента'),
          login: Projection.attr('Логи агента')
        }, { hidden: true }),
        subject: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', '', {
          name: Projection.attr('Имя субъекта')
        }, { hidden: true })
      })
    })
  });
  model.defineProjection('CheckAccessOnObject', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-permition', {
    subject: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', '', {
      isAttribute: Projection.attr(''),
      isOperation: Projection.attr(''),
      isView: Projection.attr(''),
      isClass: Projection.attr(''),
      name: Projection.attr('')
    }),
    agent: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', '', {
      name: Projection.attr(''),
      login: Projection.attr(''),
      isUser: Projection.attr(''),
      isGroup: Projection.attr(''),
      isRole: Projection.attr('')
    }),
    access: Projection.hasMany('i-c-s-soft-s-t-o-r-m-n-e-t-security-access', '', {
      filter: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-filter', '', {
        filterText: Projection.attr(''),
        name: Projection.attr('')
      }),
      typeAccess: Projection.attr('')
    })
  });
  model.defineProjection('CheckAccessOperation', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-permition', {
    subject: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', '', {
      name: Projection.attr(''),
      isOperation: Projection.attr('')
    }, { hidden: true }),
    agent: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', '', {

    })
  });
  model.defineProjection('Sec_CheckClasses', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-permition', {
    subject: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', '', {
      name: Projection.attr(''),
      isOperation: Projection.attr(''),
      isClass: Projection.attr('')
    }),
    agent: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', '', {
      name: Projection.attr(''),
      login: Projection.attr(''),
      isUser: Projection.attr(''),
      isRole: Projection.attr('')
    })
  });
  model.defineProjection('Sec_CheckClassesAndGetDetails', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-permition', {
    subject: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', '', {
      name: Projection.attr(''),
      isOperation: Projection.attr(''),
      isClass: Projection.attr('')
    }),
    agent: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', '', {
      name: Projection.attr(''),
      login: Projection.attr(''),
      isUser: Projection.attr(''),
      isRole: Projection.attr('')
    }),
    access: Projection.hasMany('i-c-s-soft-s-t-o-r-m-n-e-t-security-access', 'Доступ', {
      typeAccess: Projection.attr('Тип доступа')
    })
  });
  model.defineProjection('Sec_PermitionE', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-permition', {
    agent: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', 'Агент', {
      name: Projection.attr('', { hidden: true })
    }, { displayMemberPath: 'name' }),
    subject: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', 'Субъект', {
      name: Projection.attr('', { hidden: true })
    }, { displayMemberPath: 'name' }),
    access: Projection.hasMany('i-c-s-soft-s-t-o-r-m-n-e-t-security-access', 'Доступ', {
      typeAccess: Projection.attr('Тип доступа')
    })
  });
  model.defineProjection('Sec_PermitionL', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-permition', {
    subject: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', '', {
      name: Projection.attr('Субъект')
    }, { hidden: true }),
    agent: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', '', {
      name: Projection.attr('Агент'),
      isUser: Projection.attr('Юзер'),
      isGroup: Projection.attr('Группа'),
      isRole: Projection.attr('Роль')
    }, { hidden: true }),
    createTime: Projection.attr('Дата создания'),
    creator: Projection.attr('Создатель'),
    editTime: Projection.attr('Дата изменения'),
    editor: Projection.attr('Редактор')
  });
};
