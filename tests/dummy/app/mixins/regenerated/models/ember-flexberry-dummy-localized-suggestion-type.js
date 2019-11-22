import Mixin from '@ember/object/mixin';
import DS from 'ember-data';
import { attr, belongsTo } from 'ember-flexberry-data/utils/attributes';
export let Model = Mixin.create({
  name: DS.attr('string'),
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
  editor: DS.attr('string'),
  localization: DS.belongsTo('ember-flexberry-dummy-localization', { inverse: null, async: false }),
  suggestionType: DS.belongsTo('ember-flexberry-dummy-suggestion-type', { inverse: 'localizedTypes', async: false }),
  validations: {
    name: { presence: true },
    localization: { presence: true },
    suggestionType: { presence: true }
  },

});
export let defineProjections = function (model) {
  model.defineProjection('AuditView', 'ember-flexberry-dummy-localized-suggestion-type', {
    name: attr('Name'),
    localization: belongsTo('ember-flexberry-dummy-localization', 'Localization', {
      name: attr('Name', { hidden: true })
    }, { displayMemberPath: 'name' })
  });
  model.defineProjection('LocalizedSuggestionTypeE', 'ember-flexberry-dummy-localized-suggestion-type', {
    name: attr('Name'),
    localization: belongsTo('ember-flexberry-dummy-localization', 'Localization', {
      name: attr('Name', { hidden: true })
    }, { displayMemberPath: 'name' }),
    suggestionType: belongsTo('ember-flexberry-dummy-suggestion-type', '', {

    })
  });
};
