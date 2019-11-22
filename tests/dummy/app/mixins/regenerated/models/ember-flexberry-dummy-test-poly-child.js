import Mixin from '@ember/object/mixin';
import DS from 'ember-data';
import { attr } from 'ember-flexberry-data/utils/attributes';
export let Model = Mixin.create({
  childPole: DS.attr('number'),
  validations: {

  },

});
export let defineProjections = function (model) {
  model.defineProjection('TestPolyChildEdit', 'ember-flexberry-dummy-test-poly-child', {
    pole: attr(''),
    childPole: attr('')
  });
  model.defineProjection('TestPolyChildList', 'ember-flexberry-dummy-test-poly-child', {
    pole: attr('Pole'),
    childPole: attr('ChildPole')
  });
};
