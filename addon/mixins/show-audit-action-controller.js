import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {
    showAudit() {
      let objectPrimaryKey = this.get('model.id');

      this.transitionToRoute('i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-l', { queryParams: { filterByObjectId: objectPrimaryKey } });
    }
  }
});
