import EditFormController from 'ember-flexberry/controllers/edit-form';
import ShowAuditActionControllerMixin from 'ember-flexberry-security/mixins/show-audit-action-controller';

export default EditFormController.extend(ShowAuditActionControllerMixin, {
  // Caption of this particular edit form.

  getCellComponent: function(attr, bindingPath) {
    if (attr.kind === 'belongsTo') {
      switch (bindingPath) {
        case 'applicationUser':
          return {
            componentName: 'flexberry-lookup',
            componentProperties: {
              choose: 'showLookupDialog',
              chooseText: '...',
              remove: 'removeLookupValue',
              displayAttributeName: 'name',
              required: true,
              relationName: 'applicationUser',
              projection: 'ApplicationUserL',
              autocomplete: true
            }
          };

      }
    }

    return this._super(...arguments);
  },
});
