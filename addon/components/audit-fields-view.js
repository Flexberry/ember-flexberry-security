import Ember from 'ember';
import FlexberryBaseComponent from 'ember-flexberry/components/flexberry-base-component';

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
  auditFieldsForShow: Ember.computed('auditFields', function() {
    const originalAuditFields = this.get('auditFields');

    let auditFieldsForShow = [];

    originalAuditFields.forEach(field => {
        let fieldName =  field.field || field.Field;
        let oldValueParameter = field.oldValue || field.OldValue;
        let newValueParameter = field.newValue || field.NewValue;

        if (fieldName && oldValueParameter && newValueParameter) {
          let resultFieldObject = {
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
