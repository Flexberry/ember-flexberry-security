import Ember from 'ember';

/**
  Helper for get fields from serialized string

  @class AuditFieldsDeserializerHelper
  @extends <a href="http://emberjs.com/api/classes/Ember.Helper.html">Ember.Helper</a>
  @public
*/
export function deserializeAuditFields(serializedFields) {
  const auditFields = JSON.parse(serializedFields);

  return auditFields;
}

export default Ember.Helper.helper(deserializeAuditFields);