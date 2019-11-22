import Mixin from '@ember/object/mixin';
import DS from 'ember-data';
import { attr, belongsTo } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  typeAccess: DS.attr('i-c-s-soft-s-t-o-r-m-n-e-t-security-t-type-access'),
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
  editor: DS.attr('string'),
  filter: DS.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-filter', { inverse: null, async: false }),
  permition: DS.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-permition', { inverse: 'access', async: false }),
  validations: {
    permition: { presence: true }
  },

});
export let defineProjections = function (model) {
  model.defineProjection('AuditView', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-access', {
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
  });
  model.defineProjection('CheckAccessClass', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-access', {
    typeAccess: attr(''),
    permition: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-permition', '', {
      subject: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', '', {
        name: attr('')
      }),
      agent: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', '', {

      })
    }),
    filter: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-filter', '', {
      filterText: attr('')
    }, { hidden: true })
  });
  model.defineProjection('CheckAccessOnObject', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-access', {
    filter: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-filter', '', {
      filterText: attr(''),
      name: attr('')
    }),
    typeAccess: attr('')
  });
  model.defineProjection('Sec_AccessD', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-access', {
    typeAccess: attr('Тип доступа')
  });
  model.defineProjection('Sec_AccessE', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-access', {
    permition: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-permition', '~', {
      agent: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', '', {
        name: attr('Агент')
      }, { hidden: true }),
      subject: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', '', {
        name: attr('Субъект'),
        isClass: attr('', { hidden: true }),
        isOperation: attr('', { hidden: true })
      }, { hidden: true })
    }),
    typeAccess: attr('Тип доступа'),
    filter: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-filter', '~', {
      name: attr('Имя фильтра')
    }, { displayMemberPath: 'name' })
  });
  model.defineProjection('Sec_AccessL', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-access', {
    permition: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-permition', '', {
      agent: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', '', {
        name: attr('Агент')
      }, { hidden: true }),
      subject: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', '', {
        name: attr('Субъект')
      }, { hidden: true })
    }, { hidden: true }),
    typeAccess: attr('Тип доступа'),
    filter: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-filter', 'Фильтр', {
      name: attr('Фильтр')
    }, { hidden: true }),
    createTime: attr('Дата создания'),
    creator: attr('Создатель'),
    editTime: attr('Дата изменения'),
    editor: attr('Редактор')
  });
};
