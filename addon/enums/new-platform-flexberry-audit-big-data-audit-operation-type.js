import { createEnum } from 'ember-flexberry-data/utils/enum-functions';

export default createEnum({
  Insert: 'Insert',
  Update: 'Update',
  Delete: 'Delete',
  Select: 'Select',
  Execute: 'Execute',
  SessionStart: 'SessionStart',
  SessionEnd: 'SessionEnd',
  Ratify: 'Ratify',
  Custom: 'Custom'
});