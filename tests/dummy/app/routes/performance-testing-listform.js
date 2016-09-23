import ListFormRoute from 'ember-flexberry/routes/list-form';

export default ListFormRoute.extend({
  /**
    Name of model projection to be used as record's properties limitation.

    @property modelProjection
    @type String
    @default 'AuditEntityL'
  */
  modelProjection: 'AuditEntityL',

  /**
    Name of model to be used as list's records types.

    @property modelName
    @type String
    @default 'i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity'
  */
  modelName: 'i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity',

  developerUserSettings: { ICSSoftSTORMNETBusinessAuditObjectsAuditEntityL: {} },

  startTime: null,

  /**
    A hook you can implement to convert the URL into the model for this route.
    [More info](http://emberjs.com/api/classes/Ember.Route.html#method_model).

    @method model
    @param {Object} params
    @param {Object} transition
   */
  model() {
    this.startTime = Date.now();
    this.set('queryParams.perPage', 50);
    return this._super.apply(this, arguments);
  },

  /**
    A hook you can use to setup the controller for the current route.
    [More info](http://emberjs.com/api/classes/Ember.Route.html#method_setupController).

    @method setupController
    @param {Ember.Controller} controller
    @param {Object} model
  */
  setupController(controller, model) {
    this._super(...arguments);
    controller.set('queryExecTime', Date.now() - this.startTime);
    controller.set('objectsCount', model.get('length'));
  }
});
