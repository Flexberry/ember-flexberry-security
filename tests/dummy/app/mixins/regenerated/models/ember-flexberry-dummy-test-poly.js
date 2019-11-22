import Mixin from '@ember/object/mixin';
import DS from 'ember-data';
import { attr, belongsTo } from 'ember-flexberry-data/utils/attributes';
export let Model = Mixin.create({
  selfPole: DS.attr('string'),
  relation: DS.belongsTo('ember-flexberry-dummy-test-poly-base', { inverse: null, async: false, polymorphic: true }),
  validations: {
    relation: { presence: true }
  },

});
export let defineProjections = function (model) {
  model.defineProjection('TestPolyEdit', 'ember-flexberry-dummy-test-poly', {
    selfPole: attr('Self Pole'),
    relation: belongsTo('ember-flexberry-dummy-test-poly-base', 'Relation', {
      pole: attr('Pole', { hidden: true })
    }, { displayMemberPath: 'pole' })
  });
  model.defineProjection('TestPolyList', 'ember-flexberry-dummy-test-poly', {
    selfPole: attr('SelfPole'),
    relation: belongsTo('ember-flexberry-dummy-test-poly-base', '', {
      pole: attr('Pole', { hidden: true })
    }, { displayMemberPath: 'pole' })
  });
};
