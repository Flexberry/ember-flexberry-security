import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  selfPole: DS.attr('string'),
  relation: DS.belongsTo('ember-flexberry-dummy-test-poly-base', { inverse: null, async: false, polymorphic: true }),
  validations: {
    relation: { presence: true }
  },

});
export let defineProjections = function (model) {
  model.defineProjection('TestPolyEdit', 'ember-flexberry-dummy-test-poly', {
    selfPole: Projection.attr('Self Pole'),
    relation: Projection.belongsTo('ember-flexberry-dummy-test-poly-base', 'Relation', {
      pole: Projection.attr('Pole', { hidden: true })
    }, { displayMemberPath: 'pole' })
  });
  model.defineProjection('TestPolyList', 'ember-flexberry-dummy-test-poly', {
    selfPole: Projection.attr('SelfPole'),
    relation: Projection.belongsTo('ember-flexberry-dummy-test-poly-base', '', {
      pole: Projection.attr('Pole', { hidden: true })
    }, { displayMemberPath: 'pole' })
  });
};
