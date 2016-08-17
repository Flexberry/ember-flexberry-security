import Ember from 'ember';
import DS from 'ember-data';

export let Model = Ember.Mixin.create({
  name: DS.attr('string'),
  login: DS.attr('string'),
  pwd: DS.attr('string'),
  isUser: DS.attr('boolean'),
  isGroup: DS.attr('boolean'),
  isRole: DS.attr('boolean'),
  connString: DS.attr('string'),
  enabled: DS.attr('boolean'),
  full: DS.attr('boolean'),
  read: DS.attr('boolean'),
  insert: DS.attr('boolean'),
  update: DS.attr('boolean'),
  delete: DS.attr('boolean'),
  execute: DS.attr('boolean'),
  validations: {
    name: { presence: true },
    isUser: { presence: true },
    isGroup: { presence: true },
    isRole: { presence: true }
  },

});

