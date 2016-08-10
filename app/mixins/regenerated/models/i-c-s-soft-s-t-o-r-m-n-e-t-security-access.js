import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  typeAccess: DS.attr('i-c-s-soft-s-t-o-r-m-n-e-t-security-t-type-access'),
  createTime: DS.attr('string'),
  creator: DS.attr('string'),
  editTime: DS.attr('string'),
  editor: DS.attr('string'),
  filter: DS.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-filter', { inverse: null, async: false }),
  permition: DS.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-permition', { inverse: 'access', async: false }),
  validations: {
    permition: { presence: true }
  },

});
export let defineProjections = function (model) {
  model.defineProjection('AuditView', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-access', {
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
  });
  model.defineProjection('CheckAccessClass', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-access', {
    typeAccess: Projection.attr(''),
    permition: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-permition', '', {
      subject: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', '', {
        name: Projection.attr('')
      }),
      agent: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', '', {

      })
    }),
    filter: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-filter', '', {
      filterText: Projection.attr('')
    }, { hidden: true })
  });
  model.defineProjection('CheckAccessOnObject', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-access', {
    filter: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-filter', '', {
      filterText: Projection.attr(''),
      name: Projection.attr('')
    }),
    typeAccess: Projection.attr('')
  });
  model.defineProjection('Sec_AccessD', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-access', {
    typeAccess: Projection.attr('Тип доступа')
  });
  model.defineProjection('Sec_AccessE', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-access', {
    permition: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-permition', '~', {
      agent: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', '', {
        name: Projection.attr('Агент')
      }, { hidden: true }),
      subject: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', '', {
        name: Projection.attr('Субъект'),
        isClass: Projection.attr('', { hidden: true }),
        isOperation: Projection.attr('', { hidden: true })
      }, { hidden: true })
    }),
    typeAccess: Projection.attr('Тип доступа'),
    filter: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-filter', '~', {
      name: Projection.attr('Имя фильтра')
    }, { displayMemberPath: 'name' })
  });
  model.defineProjection('Sec_AccessL', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-access', {
    permition: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-permition', '', {
      agent: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', '', {
        name: Projection.attr('Агент')
      }, { hidden: true }),
      subject: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', '', {
        name: Projection.attr('Субъект')
      }, { hidden: true })
    }, { hidden: true }),
    typeAccess: Projection.attr('Тип доступа'),
    filter: Projection.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-filter', 'Фильтр', {
      name: Projection.attr('Фильтр')
    }, { hidden: true }),
    createTime: Projection.attr('Дата создания'),
    creator: Projection.attr('Создатель'),
    editTime: Projection.attr('Дата изменения'),
    editor: Projection.attr('Редактор')
  });
};
