import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  // Caption of this particular edit form.

  parentRoute: 'ember-flexberry-dummy-application-user-list',
  actions: {
    showAudit() {
      let objectPrimaryKey = this.get('model.id');

      this.transitionToRoute('i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-l', { queryParams: { filterByObjectId: objectPrimaryKey } });
    }
  }
});
