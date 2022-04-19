import EditFormRoute from 'ember-flexberry/routes/edit-form';
import executionStatus from '../enums/new-platform-flexberry-audit-big-data-execution-status';
import { SimplePredicate } from 'ember-flexberry-data/query/predicate';
import FilterOperator from 'ember-flexberry-data/query/filter-operator';
import QueryBuilder from 'ember-flexberry-data/query/builder';

export default EditFormRoute.extend({
  modelProjection: 'AuditRecordE',
  modelName: 'new-platform-flexberry-audit-big-data-audit-record',

  /**
   * @inheritdoc
   */
  afterModel(model) {
    let status = executionStatus.Unexecuted;
    const headAuditEntityKey = model.get('id');
    const store = this.store;
    const modelName = this.get('modelName');
    const projectionName = this.get('modelProjection');
    const controller = this.controllerFor(this.routeName);
    let headAuditEntityPredicate = new SimplePredicate('headAuditEntity', FilterOperator.Eq, headAuditEntityKey);

    let builder = new QueryBuilder(store, modelName)
    .selectByProjection(projectionName)
    .where(headAuditEntityPredicate);

    return store.queryRecord(modelName, builder.build()).then(ratifyRecord => {
      if (ratifyRecord) {
        status = ratifyRecord.get('executionStatus');
        controller.set('recordStatus', status);
      }
    });
  },
});
