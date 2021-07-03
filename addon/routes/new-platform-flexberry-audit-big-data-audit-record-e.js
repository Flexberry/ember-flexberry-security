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
    let _this = this;

    let status = executionStatus.Unexecuted;
    const headAuditEntityKey = model.get('id');
    const store = _this.store;
    const modelName = _this.get('modelName');
    const projectionName = _this.get('modelProjection');
    let headAuditEntityPredicate = new Query.SimplePredicate('headAuditEntity', Query.FilterOperator.Eq, headAuditEntityKey);
    
    let builder = new Query.Builder(store, modelName)
    .selectByProjection(projectionName)
    .where(headAuditEntityPredicate);

    store.queryRecord(modelName, builder.build()).then(function (ratifyRecord) {
      status = ratifyRecord.get('executionStatus');
      let controller = _this.get('controller');
      controller.set('recordStatus', status);
    });
  },
});
