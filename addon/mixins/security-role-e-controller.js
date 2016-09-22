import Ember from 'ember';

export default Ember.Mixin.create({
  roleRoles: null,
  roleUsers: null,
  roleClasses: null,
  roleOperations: null,

  /*
    This method will be invoked when save operation successfully completed.
    @method onSaveActionFulfilled.
  */
  onSaveActionFulfilled() {
    // Get security objects for update it on backend.
    let objectsForUpdate = [];
    if (this.roleRoles && this.roleRoles.hasContent) {
      this.roleRoles.rows.forEach(row => {
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

    if (this.roleUsers && this.roleUsers.hasContent) {
      this.roleUsers.rows.forEach(row => {
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

    if (this.roleClasses && this.roleClasses.hasContent) {
      this.roleClasses.rows.forEach(row => {
        let permission = row.get('permission');
        let deletePermission = permission != null;

        row.columns.forEach(cell => {
          let access = cell.get('model');
          if (!access && cell.get('create')) {
            if (!permission) {
              permission = this.store.createRecord('i-c-s-soft-s-t-o-r-m-n-e-t-security-permition');
              permission.set('agent', this.model);
              permission.set('subject', row.get('model'));
              row.set('permission', permission);
              objectsForUpdate.push(permission);
            }

            access = this.store.createRecord('i-c-s-soft-s-t-o-r-m-n-e-t-security-access');
            access.set('permition', permission);
            access.set('typeAccess', cell.get('operation'));
            access.set('tableCellCreate', cell);
            deletePermission = false;

            objectsForUpdate.push(access);
          } else if (access && access.get('isDeleted')) {
            access.set('tableCellDelete', cell);
            objectsForUpdate.push(access);
          } else if (access) {
            deletePermission = false;
          }
        });
        if (deletePermission) {
          permission.deleteRecord();
          objectsForUpdate.push(permission);
        }
      });
    }

    if (this.roleOperations && this.roleOperations.hasContent) {
      this.roleOperations.rows.forEach(row => {
        let cell = row.columns[0];
        let operation = cell.get('model');
        if (!operation && cell.get('create')) {
          let cls = row.get('model');
          operation = this.store.createRecord('i-c-s-soft-s-t-o-r-m-n-e-t-security-permition');
          operation.set('subject', cls);
          operation.set('agent', this.model);
          operation.set('tableCellCreate', cell);

          objectsForUpdate.push(operation);
        } else if (operation && operation.get('isDeleted')) {
          operation.set('tableCellDelete', cell);
          objectsForUpdate.push(operation);
        }
      });
    }

    // Save objects on backend.
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
          tableCellCreate.set('model', obj);
          model.set('tableCellCreate', null);
        }
      }).catch((errorData) => {
        this.onSaveActionRejected(errorData);
      });
    });
  }
});
