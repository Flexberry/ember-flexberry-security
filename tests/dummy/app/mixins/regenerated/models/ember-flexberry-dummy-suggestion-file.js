import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  order: DS.attr('number'),
  file: DS.attr('file'),
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
  editor: DS.attr('string'),
  suggestion: DS.belongsTo('ember-flexberry-dummy-suggestion', { inverse: 'files', async: false }),
  validations: {
    suggestion: { presence: true }
  },

});
export let defineProjections = function (model) {
  model.defineProjection('AuditView', 'ember-flexberry-dummy-suggestion-file', {
    order: Projection.attr('Order'),
    file: Projection.attr('File')
  });
  model.defineProjection('SuggestionFileE', 'ember-flexberry-dummy-suggestion-file', {
    order: Projection.attr('Order'),
    file: Projection.attr('File'),
    suggestion: Projection.belongsTo('ember-flexberry-dummy-suggestion', '', {

    })
  });
};
