import EmberObject from '@ember/object';
import { observer } from '@ember/object';

/**
  @class SecurityAssignDataCellObject
  @extends <a href="http://emberjs.com/api/classes/EmberObject.html">EmberObject</a>
  @public
*/
export default EmberObject.extend({
  checked: false,
  readonly: false,
  model: null,
  inited: false,
  create: false,
  operation: null,

  checkedChanged: observer('checked', function() {
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
