import FlexberryBaseComponent from 'ember-flexberry/components/flexberry-base-component';
import { computed } from '@ember/object';
import { isArray } from '@ember/array';

export default FlexberryBaseComponent.extend({
  /**
    Audit fields.
    @property value
    @type Array
  */
  auditFields: undefined,

  /**
    Caption of name column.
    @property value
    @type String
  */
  nameColumnCaption: undefined,

  /**
    Caption of old value column.
    @property value
    @type String
  */
  oldValueColumnCaption: undefined,

  /**
    Caption of new value column.
    @property value
    @type String
  */
  newValueColumnCaption: undefined,

  /**
    Audit fields optimized for showing in template.
    @property auditFieldsForShow
    @type Array
  */
  auditFieldsForShow: computed('auditFields', function() {
    let auditFieldsForShow = [];

    const originalAuditFields = this.get('auditFields');
    if (!originalAuditFields || !isArray(originalAuditFields)) {
      return auditFieldsForShow;
    }

    originalAuditFields.forEach(field => {
        const fieldName =  field.field || field.Field;

        if (fieldName) {
          const oldValueParameter = field.oldValue || field.OldValue;
          const newValueParameter = field.newValue || field.NewValue;

          const resultFieldObject = {
            field: fieldName,
            oldValue: oldValueParameter,
            newValue: newValueParameter
          };

          auditFieldsForShow.push(resultFieldObject);
        }
    });

    return auditFieldsForShow;
  })
});
