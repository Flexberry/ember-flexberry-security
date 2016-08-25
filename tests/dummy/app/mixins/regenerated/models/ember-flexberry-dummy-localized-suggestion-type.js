import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
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
    name: Projection.attr('Name'),
    localization: Projection.belongsTo('ember-flexberry-dummy-localization', 'Localization', {
      name: Projection.attr('Name', { hidden: true })
    }, { displayMemberPath: 'name' })
  });
  model.defineProjection('LocalizedSuggestionTypeE', 'ember-flexberry-dummy-localized-suggestion-type', {
    name: Projection.attr('Name'),
    localization: Projection.belongsTo('ember-flexberry-dummy-localization', 'Localization', {
      name: Projection.attr('Name', { hidden: true })
    }, { displayMemberPath: 'name' }),
    suggestionType: Projection.belongsTo('ember-flexberry-dummy-suggestion-type', '', {

    })
  });
};
