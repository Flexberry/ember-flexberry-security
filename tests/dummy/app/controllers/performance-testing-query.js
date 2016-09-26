import Ember from 'ember';

export default Ember.Controller.extend({
  queryExecTime: null,
  objectsCount: 0,
  actions: {
    clearStore() {
      this.store.unloadAll();
    }
  }
});
