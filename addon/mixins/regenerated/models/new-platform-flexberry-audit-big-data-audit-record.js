import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';

export let Model = Ember.Mixin.create({
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
  serializedFields: DS.attr('string'),
  headAuditEntity: DS.belongsTo('new-platform-flexberry-audit-big-data-audit-record', { inverse: null, async: false })
});

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AllFields', 'new-platform-flexberry-audit-big-data-audit-record', {
    userName: Projection.attr('', { index: 0 }),
    userLogin: Projection.attr('', { index: 1 }),
    objectType: Projection.attr('', { index: 2 }),
    objectPrimaryKey: Projection.attr('', { index: 3 }),
    operationTime: Projection.attr('', { index: 4 }),
    operationType: Projection.attr('', { index: 5 }),
    executionStatus: Projection.attr('', { index: 6 }),
    source: Projection.attr('', { index: 7 }),
    serializedFields: Projection.attr('', { index: 8 }),
    headAuditEntity: Projection.belongsTo('new-platform-flexberry-audit-big-data-audit-record', '', {

    }, { index: 9 })
  });

  modelClass.defineProjection('AuditRecordE', 'new-platform-flexberry-audit-big-data-audit-record', {
    objectPrimaryKey: Projection.attr('', { index: 0 }),
    objectType: Projection.attr('', { index: 1 }),
    operationTime: Projection.attr('', { index: 2 }),
    operationType: Projection.attr('', { index: 3 }),
    executionStatus: Projection.attr('', { index: 4 }),
    source: Projection.attr('', { index: 5 }),
    userName: Projection.attr('', { index: 6 }),
    userLogin: Projection.attr('', { index: 7 }),
    serializedFields: Projection.attr('', { index: 8 })
  });

  modelClass.defineProjection('AuditRecordL', 'new-platform-flexberry-audit-big-data-audit-record', {
    objectPrimaryKey: Projection.attr('', { index: 0 }),
    objectType: Projection.attr('', { index: 1 }),
    operationTime: Projection.attr('', { index: 2 }),
    operationType: Projection.attr('', { index: 3 }),
    executionStatus: Projection.attr('', { index: 4 }),
    source: Projection.attr('', { index: 5 }),
    userName: Projection.attr('', { index: 6 }),
    userLogin: Projection.attr('', { index: 7 })
  });
};
