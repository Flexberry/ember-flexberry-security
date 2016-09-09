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
  inited: false,
  create: false,

  checkedChanged: Ember.observer('checked', function() {
    if (this.get('inited')) {
      let newState = this.get('checked');
      let model = this.get('model');
      if (model) {
        if (!newState) {
          model.deleteRecord();
        } else {
          model.rollbackAttributes();
        }
      } else {
        if (!newState) {
          this.set('create', false);
        } else {
          this.set('create', true);
        }
      }
    }
  }),
});
