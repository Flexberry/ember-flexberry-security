import Mixin from '@ember/object/mixin';
import DS from 'ember-data';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';
export let Model = Mixin.create({
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
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
    agent: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', 'Агент', {
      name: attr('Имя агента'),
      login: attr('Логин агента')
    }),
    subject: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', 'Субъект', {
      name: attr('Имя субъекта')
    }),
    access: hasMany('i-c-s-soft-s-t-o-r-m-n-e-t-security-access', 'Access', {
      typeAccess: attr('Тип доступа'),
      filter: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-filter', 'Фильтр', {
        name: attr('Имя фильтра'),
        filterText: attr('Заголовок фильтра', { hidden: true })
      }, { displayMemberPath: 'filterText' }),
      permition: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-permition', 'Разрешение', {
        agent: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', '', {
          name: attr('Имя агента'),
          login: attr('Логи агента')
        }, { hidden: true }),
        subject: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', '', {
          name: attr('Имя субъекта')
        }, { hidden: true })
      })
    })
  });
  model.defineProjection('CheckAccessOnObject', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-permition', {
    subject: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', '', {
      isAttribute: attr(''),
      isOperation: attr(''),
      isView: attr(''),
      isClass: attr(''),
      name: attr('')
    }),
    agent: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', '', {
      name: attr(''),
      login: attr(''),
      isUser: attr(''),
      isGroup: attr(''),
      isRole: attr('')
    }),
    access: hasMany('i-c-s-soft-s-t-o-r-m-n-e-t-security-access', '', {
      filter: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-filter', '', {
        filterText: attr(''),
        name: attr('')
      }),
      typeAccess: attr('')
    })
  });
  model.defineProjection('CheckAccessOperation', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-permition', {
    subject: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', '', {
      name: attr(''),
      isOperation: attr('')
    }, { hidden: true }),
    agent: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', '', {

    })
  });
  model.defineProjection('Sec_CheckClasses', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-permition', {
    subject: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', '', {
      name: attr(''),
      isOperation: attr(''),
      isClass: attr('')
    }),
    agent: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', '', {
      name: attr(''),
      login: attr(''),
      isUser: attr(''),
      isRole: attr('')
    })
  });
  model.defineProjection('Sec_CheckClassesAndGetDetails', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-permition', {
    subject: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', '', {
      name: attr(''),
      isOperation: attr(''),
      isClass: attr('')
    }),
    agent: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', '', {
      name: attr(''),
      login: attr(''),
      isUser: attr(''),
      isRole: attr('')
    }),
    access: hasMany('i-c-s-soft-s-t-o-r-m-n-e-t-security-access', 'Доступ', {
      typeAccess: attr('Тип доступа')
    })
  });
  model.defineProjection('Sec_PermitionE', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-permition', {
    agent: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', 'Агент', {
      name: attr('', { hidden: true })
    }, { displayMemberPath: 'name' }),
    subject: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', 'Субъект', {
      name: attr('', { hidden: true })
    }, { displayMemberPath: 'name' }),
    access: hasMany('i-c-s-soft-s-t-o-r-m-n-e-t-security-access', 'Доступ', {
      typeAccess: attr('Тип доступа')
    })
  });
  model.defineProjection('Sec_PermitionL', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-permition', {
    subject: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', '', {
      name: attr('Субъект')
    }, { hidden: true }),
    agent: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', '', {
      name: attr('Агент'),
      isUser: attr('Юзер'),
      isGroup: attr('Группа'),
      isRole: attr('Роль')
    }, { hidden: true }),
    createTime: attr('Дата создания'),
    creator: attr('Создатель'),
    editTime: attr('Дата изменения'),
    editor: attr('Редактор')
  });
};
