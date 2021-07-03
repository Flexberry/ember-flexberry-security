import Ember from 'ember';
import ListFormRoute from 'ember-flexberry/routes/list-form';
import { Query } from 'ember-flexberry-data';
import operationTypes from '../enums/new-platform-flexberry-audit-big-data-audit-operation-type';

export default ListFormRoute.extend({
  /**
    Name of model projection to be used as record's properties limitation.

    @property modelProjection
    @type String
    @default 'AuditRecordL'
  */
  modelProjection: 'AuditRecordL',

  /**
    Name of model to be used as list's records types.

    @property modelName
    @type String
    @default 'new-platform-flexberry-audit-big-data-audit-record'
  */
  modelName: 'new-platform-flexberry-audit-big-data-audit-record',

  /**
    Defined user settings developer.
    For default userSetting use empty name ('').
    Property `<componentName>` may contain any of properties: `colsOrder`, `sorting`, `colsWidth` or being empty.

    ```javascript
    {
      <componentName>: {
        <settingName>: {
          colsOrder: [ { propName :<colName>, hide: true|false }, ... ],
          sorting: [{ propName: <colName>, direction: "asc"|"desc" }, ... ],
          colsWidths: [ <colName>:<colWidth>, ... ],
        },
        ...
      },
      ...
    }
    ```

    @property developerUserSettings
    @type Object
    @default {}
  */
  developerUserSettings: { NewPlatformFlexberryAuditBigDataAuditRecordL: {} },

  queryParams: {
    filterByObjectId: {
      refreshModel: true
    },
    filterByObjectType: {
      refreshModel: true
    }
  },

  /**
    It overrides base method and forms the limit predicate for loaded data.
    Display only not Ratify record.

    @public
    @method objectListViewLimitPredicate
    @param {Object} options Method options.
    @param {String} [options.modelName] Type of records to load.
    @param {String} [options.projectionName] Projection name to load data by.
    @param {String} [options.params] Current route query parameters.
    @return {BasePredicate} The predicate to limit loaded data.
   */
  objectListViewLimitPredicate: function(options) {
    let methodOptions = Ember.merge({
      modelName: undefined,
      projectionName: undefined,
      params: undefined
    }, options);

    if (methodOptions.modelName === this.get('modelName') &&
        methodOptions.projectionName === this.get('modelProjection')) {

      let ratifyLimitFunction = new Query.SimplePredicate('operationType', Query.FilterOperator.Neq, operationTypes.Ratify);

      let conditions = [];
      conditions.pushObject(ratifyLimitFunction);

      let objectTypeName = options.params.filterByObjectType;
      if (objectTypeName) {
        conditions.pushObject(new Query.SimplePredicate('objectType.Name', Query.FilterOperator.Eq, objectTypeName));
      }

      let objectPrimaryKey = options.params.filterByObjectId;
      if (objectPrimaryKey) {
        conditions.pushObject(new Query.StringPredicate('objectPrimaryKey').contains(objectPrimaryKey));
      }

      let isComplexPredicate = conditions.get('length') > 1;
      let limitFunction = (isComplexPredicate) ? new Query.ComplexPredicate(Query.Condition.And, ...conditions) : ratifyLimitFunction;

      return limitFunction;
    }

    return undefined;
  }
});
