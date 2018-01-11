import Ember from 'ember';

export default Ember.Mixin.create({
  userRoles: null,
  userGroups: null,
  userClasses: null,
  userOperations: null,

  /*
    This method will be invoked when save operation successfully completed.
    @method onSaveActionFulfilled.
  */
  onSaveActionFulfilled() {
    // Get security objects for update it on backend.
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

    if (this.userGroups && this.userGroups.hasContent) {
      this.userGroups.rows.forEach(row => {
        let cell = row.columns[0];
        let linkGroup = cell.get('model');
        if (!linkGroup && cell.get('create')) {
          let group = row.get('model');
          linkGroup = this.store.createRecord('i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group');
          linkGroup.set('group', group);
          linkGroup.set('user', this.model);
          linkGroup.set('tableCellCreate', cell);

          objectsForUpdate.push(linkGroup);
        } else if (linkGroup && linkGroup.get('isDeleted')) {
          linkGroup.set('tableCellDelete', cell);
          objectsForUpdate.push(linkGroup);
        }
      });
    }

    if (this.userClasses && this.userClasses.hasContent) {
      this.userClasses.rows.forEach(row => {
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

    if (this.userOperations && this.userOperations.hasContent) {
      this.userOperations.rows.forEach(row => {
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

    let promises = [];

    let updateModelTableCell = (model, obj) => {
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
    };

    // Save objects on backend (without hasMany related objects).
    objectsForUpdate.forEach(obj => {
      if (obj.constructor.modelName !== 'i-c-s-soft-s-t-o-r-m-n-e-t-security-access') {
        let promise = new Ember.RSVP.Promise((resolve, reject) => {
          obj.save().then(model => {
            updateModelTableCell(model, obj);
            resolve();
          }).catch((errorData) => {
            this.onSaveActionRejected(errorData);
            reject();
          });
        });
        promises.push(promise);
      }
    });

    // Save hasMany objects.
    Ember.RSVP.all(promises).then(()=> {
      objectsForUpdate.forEach(obj => {
        if (obj.constructor.modelName === 'i-c-s-soft-s-t-o-r-m-n-e-t-security-access') {
          obj.save().then(model => {
            updateModelTableCell(model, obj);
          }).catch((errorData) => {
            this.onSaveActionRejected(errorData);
          });
        }      });
    }, this.onSaveActionRejected);

  }
});
