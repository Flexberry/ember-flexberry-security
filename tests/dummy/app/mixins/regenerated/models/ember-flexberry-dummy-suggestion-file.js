import Mixin from '@ember/object/mixin';
import DS from 'ember-data';
import { attr, belongsTo } from 'ember-flexberry-data/utils/attributes';
export let Model = Mixin.create({
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
    order: attr('Order'),
    file: attr('File')
  });
  model.defineProjection('SuggestionFileE', 'ember-flexberry-dummy-suggestion-file', {
    order: attr('Order'),
    file: attr('File'),
    suggestion: belongsTo('ember-flexberry-dummy-suggestion', '', {

    })
  });
};
