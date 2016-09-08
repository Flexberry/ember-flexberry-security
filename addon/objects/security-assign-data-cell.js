import Ember from 'ember';

/**
  @class SecurityAssignDataCellObject
  @extends <a href="http://emberjs.com/api/classes/Ember.Object.html">Ember.Object</a>
  @public
*/
export default Ember.Object.extend({
  checked: false,
  readonly: false,
  model: null,
  create: false,
  delete: false
});
