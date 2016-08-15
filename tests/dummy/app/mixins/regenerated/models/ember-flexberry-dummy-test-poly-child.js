import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  childPole: DS.attr('number'),
  validations: {

  },

});
export let defineProjections = function (model) {
  model.defineProjection('TestPolyChildEdit', 'ember-flexberry-dummy-test-poly-child', {
    pole: Projection.attr(''),
    childPole: Projection.attr('')
  });
  model.defineProjection('TestPolyChildList', 'ember-flexberry-dummy-test-poly-child', {
    pole: Projection.attr('Pole'),
    childPole: Projection.attr('ChildPole')
  });
};
