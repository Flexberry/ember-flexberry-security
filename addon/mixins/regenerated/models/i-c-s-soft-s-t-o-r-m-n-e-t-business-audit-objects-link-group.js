import Ember from 'ember';
import DS from 'ember-data';

export let Model = Ember.Mixin.create({
  user: DS.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-agent', { inverse: null, async: false }),
  group: DS.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-agent', { inverse: null, async: false }),
  validations: {
    user: { presence: true },
    group: { presence: true }
  },

});

