import Ember from 'ember';
import ListFormRoute from 'ember-flexberry/routes/list-form';
import { Query } from 'ember-flexberry-data';

export default ListFormRoute.extend({
  /**
    Name of model projection to be used as record's properties limitation.

    @property modelProjection
    @type String
    @default 'AuditEntityL'
  */
  modelProjection: 'AuditEntityL',

  /**
    Name of model to be used as list's records types.

    @property modelName
    @type String
    @default 'i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity'
  */
  modelName: 'i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity',

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
  developerUserSettings: { ICSSoftSTORMNETBusinessAuditObjectsAuditEntityL: {} },

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
    If there is displayed even number or records per page, records where 'address' attribute contains letter 'S' are filtered.
    If there is displayed odd number or records per page, records where 'address' attribute contains letter 'п' are filtered.

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

      let objectTypeName = options.params.filterByObjectType;
      if (objectTypeName) {
        let limitFunction = new Query.SimplePredicate('objectType.Name', Query.FilterOperator.Eq, objectTypeName);
        return limitFunction;
      }

      let objectPrimaryKey = options.params.filterByObjectId;

      if (objectPrimaryKey) {
        let limitFunction = new Query.StringPredicate('objectPrimaryKey').contains(objectPrimaryKey);

        return limitFunction;
      }
    }

    return undefined;
  }
});
