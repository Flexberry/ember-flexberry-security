import Ember from 'ember';
import FlexberryBaseComponent from 'ember-flexberry/components/flexberry-base-component';
import { translationMacro as t } from 'ember-i18n';

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
    Audit fields with separated strings.

    @property auditFieldsWithSeparatedLines
    @type Array
  */
  auditFieldsWithSeparatedLines: Ember.computed('auditFields', function() {
    const auditFields = this.get('auditFields');

    let fieldsWithSeparatedLines = [];

    auditFields.forEach(field => {
        const fieldName =  field.field || field.Field || ' ';
        let oldValueParameter = field.oldValue || field.OldValue || ' ';
        let newValueParameter = field.newValue || field.NewValue || ' ';

        let oldValueParameterSeparated = oldValueParameter.replace(',', '\n');
        let newValueParameterSeparated = newValueParameter.replace(',', '\n');

        let resultFieldObject = {
          field: fieldName,
          oldValue: oldValueParameterSeparated,
          newValue: newValueParameterSeparated
        };

        fieldsWithSeparatedLines.push(resultFieldObject);
    });

    return fieldsWithSeparatedLines;
  })
});
