import Ember from 'ember';
import FlexberryBaseComponent from 'ember-flexberry/components/flexberry-base-component';
import { translationMacro as t } from 'ember-i18n';

export default FlexberryBaseComponent.extend({
  /**
    Input value.

    @property value
    @type SecurityAssignDataObject
  */
  value: undefined,

  /**
    Text to be displayed in table body, if content is not defined or empty.

    @property placeholder
    @type String
    @default 't('components.object-list-view.placeholder')'
   */
  placeholder: t('components.object-list-view.placeholder'),

  /**
    Total columns count (including additional columns).

    @property colspan
    @type Number
    @readOnly
  */
  colspan: Ember.computed('value.headers.length', function() {
    let columnsCount = 0;
    let columns = this.get('value.headers');
    columnsCount += Ember.isArray(columns) ? columns.length : 0;

    return columnsCount;
  }),

});
