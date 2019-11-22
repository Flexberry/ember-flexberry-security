import Mixin from '@ember/object/mixin';
import DS from 'ember-data';
import { attr } from 'ember-flexberry-data/utils/attributes';
export let Model = Mixin.create({
  name: DS.attr('string'),
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
  editor: DS.attr('string'),
  validations: {
    name: { presence: true }
  },

});
export let defineProjections = function (model) {
  model.defineProjection('AuditView', 'ember-flexberry-dummy-localization', {
    name: attr('Name')
  });
  model.defineProjection('LocalizationE', 'ember-flexberry-dummy-localization', {
    name: attr('Name')
  });
  model.defineProjection('LocalizationL', 'ember-flexberry-dummy-localization', {
    name: attr('Name')
  });
};
