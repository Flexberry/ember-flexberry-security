import EditFormRoute from 'ember-flexberry/routes/edit-form';
import executionStatus from '../enums/new-platform-flexberry-audit-big-data-execution-status';
import { Query } from 'ember-flexberry-data';

export default EditFormRoute.extend({
  modelProjection: 'AuditRecordE',
  modelName: 'new-platform-flexberry-audit-big-data-audit-record',

  /**
   * @inheritdoc
   */
  afterModel(model, transition) {
    let status = executionStatus.Unexecuted;
    const headAuditEntityKey = model.get('id');
    const store = this.store;
    const modelName = this.get('modelName');
    const projectionName = this.get('modelProjection');
    const controller = this.controllerFor(this.routeName);
    let headAuditEntityPredicate = new Query.SimplePredicate('headAuditEntity', Query.FilterOperator.Eq, headAuditEntityKey);

    let builder = new Query.Builder(store, modelName)
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