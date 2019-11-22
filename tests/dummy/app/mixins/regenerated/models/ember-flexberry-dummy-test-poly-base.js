import Mixin from '@ember/object/mixin';
import DS from 'ember-data';

export let Model = Mixin.create({
  pole: DS.attr('string'),
  validations: {

  },

});

