import EditFormRoute from 'ember-flexberry/routes/edit-form';
import SecurityAssignDataObject from '../objects/security-assign-data';

export default EditFormRoute.extend({
  modelProjection: 'UserE',
  modelName: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-agent',
  userRoles: null,

  /**
    A hook you can implement to convert the URL into the model for this route.
    [More info](http://emberjs.com/api/classes/Ember.Route.html#method_model).

    @method model
    @param {Object} params
    @param {Object} transition
   */
  model(params, transition) {
    return this._super.apply(this, arguments).then(model => {
      // TODO: load data. set userRoles

      this.set('userRoles', SecurityAssignDataObject.create({
        headers: ['Наименование', 'Своё', 'Унаследовано'],
        rows: [{
          name: 'admin',
          columns: [{ checked: false, readonly: false },
            { checked: true, readonly: true },
          ]
        },
          {
            name: 'Все пользователи',
            columns: [{ checked: true, readonly: false },
              { checked: true, readonly: true }
            ]
          },
        ],
        hasContent: true
      }));
      return model;
    });
  },

  /**
    A hook you can use to setup the controller for the current route.
    [More info](http://emberjs.com/api/classes/Ember.Route.html#method_setupController).

    @method setupController
    @param {Ember.Controller} controller
    @param {Object} model
  */
  setupController(controller) {
    this._super(...arguments);
    controller.set('userRoles', this.userRoles);
  }
});
