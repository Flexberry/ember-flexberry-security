/**
  Util for get fields from serialized string
  @param {String} serializedFields JSon string with fields data.
  @returns {Object[]} parsed fields.
*/
export function deserializeAuditFields(serializedFields) {
  let deserializedAuditFields = '';

  try {
    deserializedAuditFields = JSON.parse(serializedFields);
  } catch(e) {
    throw new Error(`Audit fields json deserialization error. '${e}'`);
  }

  return deserializedAuditFields;
}
