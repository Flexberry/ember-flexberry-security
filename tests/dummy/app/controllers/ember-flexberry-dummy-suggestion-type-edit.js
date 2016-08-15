import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  // Caption of this particular edit form.

  parentRoute: 'ember-flexberry-dummy-suggestion-type-list',
  getCellComponent: function(attr, bindingPath) {
    if (attr.kind === 'belongsTo') {
      switch (bindingPath) {
        case 'localization':
          return {
            componentName: 'flexberry-lookup',
            componentProperties: {
              choose: 'showLookupDialog',
              chooseText: '...',
              remove: 'removeLookupValue',
              displayAttributeName: 'name',
              required: true,
              relationName: 'localization',
              projection: 'LocalizationL',
              autocomplete: true
            }
          };

      }
    }

    return this._super(...arguments);
  },
});
