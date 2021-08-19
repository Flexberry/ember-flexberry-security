import Mixin from '@ember/object/mixin';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  type: DS.attr('string'),
  isAttribute: DS.attr('boolean'),
  isOperation: DS.attr('boolean'),
  isView: DS.attr('boolean'),
  isClass: DS.attr('boolean'),
  sharedOper: DS.attr('boolean', { defaultValue: true }),
  comment: DS.attr('string'),
  /**
    Non-stored property.

    @property full
  */
  full: DS.attr('boolean'),
  /**
    Method to set non-stored property.
    Please, use code below in model class (outside of this mixin) otherwise it will be replaced during regeneration of models.
    Please, implement 'fullCompute' method in model class (outside of this mixin) if you want to compute value of 'full' property.

    @method _fullCompute
    @private
    @example
      ```javascript
      _fullChanged: on('init', observer('full', function() {
        once(this, '_fullCompute');
      }))
      ```
  */
  _fullCompute: function() {
    let result = (this.fullCompute && typeof this.fullCompute === 'function') ? this.fullCompute() : null;
    this.set('full', result);
  },
  /**
    Non-stored property.

    @property read
  */
  read: DS.attr('boolean'),
  /**
    Method to set non-stored property.
    Please, use code below in model class (outside of this mixin) otherwise it will be replaced during regeneration of models.
    Please, implement 'readCompute' method in model class (outside of this mixin) if you want to compute value of 'read' property.

    @method _readCompute
    @private
    @example
      ```javascript
      _readChanged: on('init', observer('read', function() {
        once(this, '_readCompute');
      }))
      ```
  */
  _readCompute: function() {
    let result = (this.readCompute && typeof this.readCompute === 'function') ? this.readCompute() : null;
    this.set('read', result);
  },
  /**
    Non-stored property.

    @property insert
  */
  insert: DS.attr('boolean'),
  /**
    Method to set non-stored property.
    Please, use code below in model class (outside of this mixin) otherwise it will be replaced during regeneration of models.
    Please, implement 'insertCompute' method in model class (outside of this mixin) if you want to compute value of 'insert' property.

    @method _insertCompute
    @private
    @example
      ```javascript
      _insertChanged: on('init', observer('insert', function() {
        once(this, '_insertCompute');
      }))
      ```
  */
  _insertCompute: function() {
    let result = (this.insertCompute && typeof this.insertCompute === 'function') ? this.insertCompute() : null;
    this.set('insert', result);
  },
  /**
    Non-stored property.

    @property update
  */
  update: DS.attr('boolean'),
  /**
    Method to set non-stored property.
    Please, use code below in model class (outside of this mixin) otherwise it will be replaced during regeneration of models.
    Please, implement 'updateCompute' method in model class (outside of this mixin) if you want to compute value of 'update' property.

    @method _updateCompute
    @private
    @example
      ```javascript
      _updateChanged: on('init', observer('update', function() {
        once(this, '_updateCompute');
      }))
      ```
  */
  _updateCompute: function() {
    let result = (this.updateCompute && typeof this.updateCompute === 'function') ? this.updateCompute() : null;
    this.set('update', result);
  },
  /**
    Non-stored property.

    @property delete
  */
  delete: DS.attr('boolean'),
  /**
    Method to set non-stored property.
    Please, use code below in model class (outside of this mixin) otherwise it will be replaced during regeneration of models.
    Please, implement 'deleteCompute' method in model class (outside of this mixin) if you want to compute value of 'delete' property.

    @method _deleteCompute
    @private
    @example
      ```javascript
      _deleteChanged: on('init', observer('delete', function() {
        once(this, '_deleteCompute');
      }))
      ```
  */
  _deleteCompute: function() {
    let result = (this.deleteCompute && typeof this.deleteCompute === 'function') ? this.deleteCompute() : null;
    this.set('delete', result);
  },
  /**
    Non-stored property.

    @property execute
  */
  execute: DS.attr('boolean'),
  /**
    Method to set non-stored property.
    Please, use code below in model class (outside of this mixin) otherwise it will be replaced during regeneration of models.
    Please, implement 'executeCompute' method in model class (outside of this mixin) if you want to compute value of 'execute' property.

    @method _executeCompute
    @private
    @example
      ```javascript
      _executeChanged: on('init', observer('execute', function() {
        once(this, '_executeCompute');
      }))
      ```
  */
  _executeCompute: function() {
    let result = (this.executeCompute && typeof this.executeCompute === 'function') ? this.executeCompute() : null;
    this.set('execute', result);
  },
  /**
    Non-stored property.

    @property permitted
  */
  permitted: DS.attr('boolean'),
  /**
    Method to set non-stored property.
    Please, use code below in model class (outside of this mixin) otherwise it will be replaced during regeneration of models.
    Please, implement 'permittedCompute' method in model class (outside of this mixin) if you want to compute value of 'permitted' property.

    @method _permittedCompute
    @private
    @example
      ```javascript
      _permittedChanged: on('init', observer('permitted', function() {
        once(this, '_permittedCompute');
      }))
      ```
  */
  _permittedCompute: function() {
    let result = (this.permittedCompute && typeof this.permittedCompute === 'function') ? this.permittedCompute() : null;
    this.set('permitted', result);
  },
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
  editor: DS.attr('string')
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-subject.validations.name.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  type: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-subject.validations.type.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  isAttribute: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-subject.validations.isAttribute.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  isOperation: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-subject.validations.isOperation.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  isView: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-subject.validations.isView.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  isClass: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-subject.validations.isClass.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  sharedOper: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-subject.validations.sharedOper.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  comment: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-subject.validations.comment.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  full: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-subject.validations.full.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  read: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-subject.validations.read.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  insert: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-subject.validations.insert.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  update: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-subject.validations.update.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  delete: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-subject.validations.delete.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  execute: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-subject.validations.execute.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  permitted: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-subject.validations.permitted.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  createTime: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-subject.validations.createTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  creator: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-subject.validations.creator.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  editTime: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-subject.validations.editTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  editor: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-subject.validations.editor.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AuditView', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', {
    name: attr('Имя', { index: 0 }),
    type: attr('Тип', { index: 1 }),
    isAttribute: attr('Атрибут', { index: 2 }),
    isOperation: attr('Операция', { index: 3 }),
    isView: attr('Представление', { index: 4 }),
    isClass: attr('Класс', { index: 5 }),
    sharedOper: attr('Разделяемая операция', { index: 6 }),
    comment: attr('Комментарий', { index: 7 })
  });

  modelClass.defineProjection('DetermineProperties', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', {
    isAttribute: attr('', { index: 0 }),
    isOperation: attr('', { index: 1 }),
    isView: attr('', { index: 2 }),
    isClass: attr('', { index: 3 })
  });

  modelClass.defineProjection('Sec_OperationLE', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', {
    name: attr('Имя', { index: 0 }),
    isAttribute: attr('', { index: 1, hidden: true }),
    isOperation: attr('', { index: 2, hidden: true }),
    isView: attr('', { index: 3, hidden: true }),
    isClass: attr('', { index: 4, hidden: true }),
    type: attr('Тип', { index: 5 }),
    sharedOper: attr('Общая операция', { index: 6 }),
    createTime: attr('Дата создания', { index: 7 }),
    creator: attr('Создатель', { index: 8 }),
    editTime: attr('Дата изменения', { index: 9 }),
    editor: attr('Редактор', { index: 10 }),
    comment: attr('Комментарий', { index: 11 })
  });

  modelClass.defineProjection('Sec_SubjectE', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', {
    name: attr('Имя', { index: 0 }),
    isAttribute: attr('Атрибут', { index: 1, hidden: true }),
    isClass: attr('Класс', { index: 2, hidden: true }),
    isView: attr('Представление', { index: 3, hidden: true }),
    isOperation: attr('Операция', { index: 4, hidden: true }),
    comment: attr('Комментарий', { index: 5 })
  });

  modelClass.defineProjection('Sec_SubjectL', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', {
    name: attr('Имя', { index: 0 }),
    isAttribute: attr('Атрибут', { index: 1 }),
    isOperation: attr('Операция', { index: 2 }),
    isView: attr('Вид', { index: 3 }),
    isClass: attr('Класс', { index: 4 }),
    createTime: attr('Дата создания', { index: 5 }),
    creator: attr('Создатель', { index: 6 }),
    editTime: attr('Дата изменения', { index: 7 }),
    editor: attr('Редактор', { index: 8 }),
    comment: attr('Комментарий', { index: 9 })
  });

  modelClass.defineProjection('Sec_SubjectTypeAccess', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-subject', {
    name: attr('Имя', { index: 0 }),
    isAttribute: attr('', { index: 1, hidden: true }),
    isOperation: attr('', { index: 2, hidden: true }),
    isView: attr('', { index: 3, hidden: true }),
    isClass: attr('', { index: 4, hidden: true }),
    full: attr('Полный доступ', { index: 5 }),
    read: attr('Чтение', { index: 6 }),
    insert: attr('Вставка', { index: 7 }),
    update: attr('Обновление', { index: 8 }),
    delete: attr('Удаление', { index: 9 }),
    execute: attr('Исполнение', { index: 10 }),
    permitted: attr('', { index: 11, hidden: true })
  });
};
