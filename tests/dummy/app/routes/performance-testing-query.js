import Ember from 'ember';
import { Query } from 'ember-flexberry-data';

const { Builder } = Query;

export default Ember.Route.extend({
  /**
    Name of model projection to be used as record's properties limitation.

    @property modelProjection
    @type String
    @default 'ApplicationUserL'
  */
  modelProjection: 'ApplicationUserL',

  /**
    Name of model to be used as list's records types.

    @property modelName
    @type String
    @default 'ember-flexberry-dummy-application-user'
  */
  modelName: 'ember-flexberry-dummy-application-user',

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

    let builder = new Builder(this.store)
      .from(this.modelName)
      .select('name,eMail,activated,birthday,gender,karma')
      .top(50)
      .count();

    return this.store.query(this.modelName, builder.build());

    //return this._super.apply(this, arguments); //TODO: переписать
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
