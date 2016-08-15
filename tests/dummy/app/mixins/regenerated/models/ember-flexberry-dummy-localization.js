import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  name: DS.attr('string'),
  createTime: DS.attr('string'),
  creator: DS.attr('string'),
  editTime: DS.attr('string'),
  editor: DS.attr('string'),
  validations: {
    name: { presence: true }
  },

});
export let defineProjections = function (model) {
  model.defineProjection('AuditView', 'ember-flexberry-dummy-localization', {
    name: Projection.attr('Name')
  });
  model.defineProjection('LocalizationE', 'ember-flexberry-dummy-localization', {
    name: Projection.attr('Name')
  });
  model.defineProjection('LocalizationL', 'ember-flexberry-dummy-localization', {
    name: Projection.attr('Name')
  });
};
