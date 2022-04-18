import Mixin from '@ember/object/mixin';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  userName: DS.attr('string'),
  userLogin: DS.attr('string'),
  operationId: DS.attr('string'),
  operationTags: DS.attr('string'),
  objectType: DS.attr('string'),
  objectPrimaryKey: DS.attr('string'),
  operationTime: DS.attr('date'),
  operationType: DS.attr('string'),
  executionStatus: DS.attr('new-platform-flexberry-audit-big-data-execution-status'),
  source: DS.attr('string'),
  serializedFields: DS.attr('audit-big-data-serialized-fields'),
  headAuditEntity: DS.belongsTo('new-platform-flexberry-audit-big-data-audit-record', { inverse: null, async: false })
});

export let ValidationRules = {
  
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AllFields', 'new-platform-flexberry-audit-big-data-audit-record', {
    userName: attr('', { index: 0 }),
    userLogin: attr('', { index: 1 }),
    objectType: attr('', { index: 2 }),
    objectPrimaryKey: attr('', { index: 3 }),
    operationTime: attr('', { index: 4 }),
    operationType: attr('', { index: 5 }),
    executionStatus: attr('', { index: 6 }),
    source: attr('', { index: 7 }),
    serializedFields: attr('', { index: 8 }),
    headAuditEntity: belongsTo('new-platform-flexberry-audit-big-data-audit-record', '', {

    }, { index: 9 })
  });

  modelClass.defineProjection('AuditRecordE', 'new-platform-flexberry-audit-big-data-audit-record', {
    objectPrimaryKey: attr('', { index: 0 }),
    objectType: attr('', { index: 1 }),
    operationTime: attr('', { index: 2 }),
    operationType: attr('', { index: 3 }),
    executionStatus: attr('', { index: 4 }),
    source: attr('', { index: 5 }),
    userName: attr('', { index: 6 }),
    userLogin: attr('', { index: 7 }),
    serializedFields: attr('', { index: 8 })
  });

  modelClass.defineProjection('AuditRecordL', 'new-platform-flexberry-audit-big-data-audit-record', {
    objectPrimaryKey: attr('', { index: 0 }),
    objectType: attr('', { index: 1 }),
    operationTime: attr('', { index: 2 }),
    operationType: attr('', { index: 3 }),
    source: attr('', { index: 4 }),
    userName: attr('', { index: 5 }),
    userLogin: attr('', { index: 6 })
  });
};