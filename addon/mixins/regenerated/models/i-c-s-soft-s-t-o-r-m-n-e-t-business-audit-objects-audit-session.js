import Ember from 'ember';
import DS from 'ember-data';

export let Model = Ember.Mixin.create({
  startTime: DS.attr('date'),
  endDate: DS.attr('date'),
  lastActionTime: DS.attr('date'),
  source: DS.attr('string'),
  enabled: DS.attr('boolean'),
  duration: DS.attr('string'),
  user: DS.belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-agent', { inverse: null, async: false }),
  validations: {
    startTime: { datetime: true },
    source: { presence: true },
    user: { presence: true }
  },

});

