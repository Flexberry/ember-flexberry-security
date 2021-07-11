/**
  Util for get fields from serialized string

  @param {String} serializedFields JSon string with fields data.
  @returns {Object[]} parsed fields.
*/
export function deserializeAuditFields(serializedFields) {
  const auditFields = JSON.parse(serializedFields);

  return auditFields;
}
