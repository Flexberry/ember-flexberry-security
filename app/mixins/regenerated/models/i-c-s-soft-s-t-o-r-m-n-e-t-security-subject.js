import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  name: DS.attr('string'),
  type: DS.attr('string'),
  isAttribute: DS.attr('boolean'),
  isOperation: DS.attr('boolean'),
  isView: DS.attr('boolean'),
  isClass: DS.attr('boolean'),
  sharedOper: DS.attr('boolean'),
  full: DS.attr('boolean'),
  read: DS.attr('boolean'),
  insert: DS.attr('boolean'),
  update: DS.attr('boolean'),
  delete: DS.attr('boolean'),
  execute: DS.attr('boolean'),
  permitted: DS.attr('boolean'),
  createTime: DS.attr('string'),
  creator: DS.attr('string'),
  editTime: DS.attr('string'),
  editor: DS.attr('string'),
  validations: {
    name: { presence: true },
    isAttribute: { presence: true },
    isOperation: { presence: true },
    isView: { presence: true },
    isClass: { presence: true }
  },

});
export let defineProjections = function (model) {
  model.defineProjection('AuditView', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', {
    name: Projection.attr('Имя'),
    type: Projection.attr('Тип'),
    isAttribute: Projection.attr('Атрибут'),
    isOperation: Projection.attr('Операция'),
    isView: Projection.attr('Представление'),
    isClass: Projection.attr('Класс'),
    sharedOper: Projection.attr('Разделяемая операция')
  });
  model.defineProjection('DetermineProperties', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', {
    isAttribute: Projection.attr(''),
    isOperation: Projection.attr(''),
    isView: Projection.attr(''),
    isClass: Projection.attr('')
  });
  model.defineProjection('Sec_OperationLE', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', {
    name: Projection.attr('Имя'),
    isAttribute: Projection.attr('', { hidden: true }),
    isOperation: Projection.attr('', { hidden: true }),
    isView: Projection.attr('', { hidden: true }),
    isClass: Projection.attr('', { hidden: true }),
    type: Projection.attr('Тип'),
    sharedOper: Projection.attr('Общая операция'),
    createTime: Projection.attr('Дата создания'),
    creator: Projection.attr('Создатель'),
    editTime: Projection.attr('Дата изменения'),
    editor: Projection.attr('Редактор')
  });
  model.defineProjection('Sec_SubjectE', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', {
    name: Projection.attr('Имя'),
    isClass: Projection.attr('Класс', { hidden: true }),
    isView: Projection.attr('Представление', { hidden: true }),
    isOperation: Projection.attr('Операция', { hidden: true })
  });
  model.defineProjection('Sec_SubjectL', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', {
    name: Projection.attr('Имя'),
    isAttribute: Projection.attr('Атрибут'),
    isOperation: Projection.attr('Операция'),
    isView: Projection.attr('Вид'),
    isClass: Projection.attr('Класс'),
    createTime: Projection.attr('Дата создания'),
    creator: Projection.attr('Создатель'),
    editTime: Projection.attr('Дата изменения'),
    editor: Projection.attr('Редактор')
  });
  model.defineProjection('Sec_SubjectTypeAccess', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', {
    name: Projection.attr('Имя'),
    isAttribute: Projection.attr('', { hidden: true }),
    isOperation: Projection.attr('', { hidden: true }),
    isView: Projection.attr('', { hidden: true }),
    isClass: Projection.attr('', { hidden: true }),
    full: Projection.attr('Полный доступ'),
    read: Projection.attr('Чтение'),
    insert: Projection.attr('Вставка'),
    update: Projection.attr('Обновление'),
    delete: Projection.attr('Удаление'),
    execute: Projection.attr('Исполнение'),
    permitted: Projection.attr('', { hidden: true })
  });
};
