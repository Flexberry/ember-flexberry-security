import ListFormRoute from 'ember-flexberry/routes/list-form';
import { computed } from '@ember/object';

export default ListFormRoute.extend({
  /**
    Name of model projection to be used as record's properties limitation.

    @property modelProjection
    @type String
    @default 'Sec_LinkGroupL'
  */
  modelProjection: 'Sec_LinkGroupL',

  /**
    Name of model to be used as list's records types.

    @property modelName
    @type String
    @default 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group'
  */
  modelName: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group',

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
  developerUserSettings: computed(function() {
    return {
      ICSSoftSTORMNETSecurityLinkGroupL: {}
    }
  }),
});
