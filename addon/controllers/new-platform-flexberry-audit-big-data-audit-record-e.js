import EditFormController from 'ember-flexberry/controllers/edit-form';
import executionStatus from '../enums/new-platform-flexberry-audit-big-data-execution-status';
import { deserializeAuditFields } from '../utils/audit-fields-json-deserializer';

export default EditFormController.extend({
  // Caption of this particular edit form.

  parentRoute: 'new-platform-flexberry-audit-big-data-audit-record-l',
  readonly: true,
  recordStatus: executionStatus.Unexecuted,

  /**
    Deserialize audit fields.

    @property deserializedAuditFields
    @type Array
    @readOnly
  */
  deserializedAuditFields: Ember.computed('model.serializedFields', function() {
    const serializedFields = this.get('model.serializedFields');
    let deserializedFields = deserializeAuditFields(serializedFields);

    return deserializedFields;
  })
});
