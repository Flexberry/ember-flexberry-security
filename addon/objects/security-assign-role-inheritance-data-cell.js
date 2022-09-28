import Ember from 'ember';
import SecurityAssignDataCellObject from './security-assign-data-cell';

/**
  @class SecurityAssignRoleInheritanceDataCellObject
  @extends SecurityAssignDataCellObject
  @public
*/
export default SecurityAssignDataCellObject.extend({
  checkedChanged: null,
  linkedRoles: [],
  checked: Ember.computed('linkedRoles', 'linkedRoles.[]', 'linkedRoles.@each.checked', function() {
    let linkedRoles = Ember.get(this, 'linkedRoles');
    let isChecked = linkedRoles != null && linkedRoles.length > 0 && linkedRoles.some((linkedRole) => linkedRole.checked);
    return isChecked;
  }),
});
