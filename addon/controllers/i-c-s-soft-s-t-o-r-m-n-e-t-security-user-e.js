import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  // Caption of this particular edit form.

  parentRoute: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-user-l',

  userRoles: null,
  userGroups: null,
  userClasses: null,
  userOperations: null,

  /*
    This method will be invoked when save operation successfully completed.
    @method onSaveActionFulfilled.
  */
  onSaveActionFulfilled() {
    // TODO: Get security objects for update it on backend.
    let objectsForUpdate = [];
    if (this.userRoles && this.userRoles.hasContent) {
      this.userRoles.rows.forEach(row => {
        let cell = row.columns[0];
        let linkRole = cell.get('model');
        if (!linkRole && cell.get('create')) {
          let role = row.get('model');
          linkRole = this.store.createRecord('i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role');
          linkRole.set('role', role);
          linkRole.set('agent', this.model);
          linkRole.set('tableCellCreate', cell);

          objectsForUpdate.push(linkRole);
        } else if (linkRole && linkRole.get('isDeleted')) {
          linkRole.set('tableCellDelete', cell);
          objectsForUpdate.push(linkRole);
        }
      });
    }

    // Save objects for update on backend.
    objectsForUpdate.forEach(obj => {
      obj.save().then(model => {
        // Refresh table state.
        let tableCellDelete = model.get('tableCellDelete');
        if (tableCellDelete) {
          tableCellDelete.set('model', null);
          model.set('tableCellDelete', null);
        }

        let tableCellCreate = model.get('tableCellCreate');
        if (tableCellCreate) {
          tableCellCreate.set('create', false);
          model.set('tableCellCreate', null);
        }
      }).catch((errorData) => {
        this.onSaveActionRejected(errorData);
      });
    });

  }

});
