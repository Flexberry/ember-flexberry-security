import Ember from 'ember';
import FlexberryBaseComponent from 'ember-flexberry/components/flexberry-base-component';
import { translationMacro as t } from 'ember-i18n';

export default FlexberryBaseComponent.extend({
  /**
    Audit fields.
    @property value
    @type String
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
});