import Mixin from '@ember/object/mixin';
import DS from 'ember-data';
import { attr } from 'ember-flexberry-data/utils/attributes';
export let Model = Mixin.create({
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
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
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
    name: attr('Имя'),
    type: attr('Тип'),
    isAttribute: attr('Атрибут'),
    isOperation: attr('Операция'),
    isView: attr('Представление'),
    isClass: attr('Класс'),
    sharedOper: attr('Разделяемая операция')
  });
  model.defineProjection('DetermineProperties', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', {
    isAttribute: attr(''),
    isOperation: attr(''),
    isView: attr(''),
    isClass: attr('')
  });
  model.defineProjection('Sec_OperationLE', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', {
    name: attr('Имя'),
    isAttribute: attr('', { hidden: true }),
    isOperation: attr('', { hidden: true }),
    isView: attr('', { hidden: true }),
    isClass: attr('', { hidden: true }),
    type: attr('Тип'),
    sharedOper: attr('Общая операция'),
    createTime: attr('Дата создания'),
    creator: attr('Создатель'),
    editTime: attr('Дата изменения'),
    editor: attr('Редактор')
  });
  model.defineProjection('Sec_SubjectE', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', {
    name: attr('Имя'),
    isClass: attr('Класс', { hidden: true }),
    isView: attr('Представление', { hidden: true }),
    isOperation: attr('Операция', { hidden: true })
  });
  model.defineProjection('Sec_SubjectL', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', {
    name: attr('Имя'),
    isAttribute: attr('Атрибут'),
    isOperation: attr('Операция'),
    isView: attr('Вид'),
    isClass: attr('Класс'),
    createTime: attr('Дата создания'),
    creator: attr('Создатель'),
    editTime: attr('Дата изменения'),
    editor: attr('Редактор')
  });
  model.defineProjection('Sec_SubjectTypeAccess', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', {
    name: attr('Имя'),
    isAttribute: attr('', { hidden: true }),
    isOperation: attr('', { hidden: true }),
    isView: attr('', { hidden: true }),
    isClass: attr('', { hidden: true }),
    full: attr('Полный доступ'),
    read: attr('Чтение'),
    insert: attr('Вставка'),
    update: attr('Обновление'),
    delete: attr('Удаление'),
    execute: attr('Исполнение'),
    permitted: attr('', { hidden: true })
  });
};
