import Mixin from '@ember/object/mixin';
import DS from 'ember-data';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';
export let Model = Mixin.create({
  name: DS.attr('string'),
  moderated: DS.attr('boolean'),
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
  editor: DS.attr('string'),
  parent: DS.belongsTo('ember-flexberry-dummy-suggestion-type', { inverse: null, async: false }),
  localizedTypes: DS.hasMany('ember-flexberry-dummy-localized-suggestion-type', { inverse: 'suggestionType', async: false }),
  validations: {
    name: { presence: true }
  },

});
export let defineProjections = function (model) {
  model.defineProjection('AuditView', 'ember-flexberry-dummy-suggestion-type', {
    name: attr('Name'),
    moderated: attr('Moderated'),
    parent: belongsTo('ember-flexberry-dummy-suggestion-type', 'Parent', {
      name: attr('Name')
    }),
    localizedTypes: hasMany('ember-flexberry-dummy-localized-suggestion-type', 'Localized types', {
      name: attr('Name'),
      localization: belongsTo('ember-flexberry-dummy-localization', 'Localization', {
        name: attr('Name', { hidden: true })
      }, { displayMemberPath: 'name' })
    })
  });
  model.defineProjection('SuggestionTypeE', 'ember-flexberry-dummy-suggestion-type', {
    name: attr('Name'),
    moderated: attr('Moderated'),
    parent: belongsTo('ember-flexberry-dummy-suggestion-type', 'Parent', {
      name: attr('Name', { hidden: true })
    }, { displayMemberPath: 'name' }),
    localizedTypes: hasMany('ember-flexberry-dummy-localized-suggestion-type', 'Localized types', {
      name: attr('Name'),
      localization: belongsTo('ember-flexberry-dummy-localization', 'Localization', {
        name: attr('Name', { hidden: true })
      }, { displayMemberPath: 'name' }),
      suggestionType: belongsTo('ember-flexberry-dummy-suggestion-type', '', {

      })
    })
  });
  model.defineProjection('SuggestionTypeL', 'ember-flexberry-dummy-suggestion-type', {
    name: attr('Name'),
    moderated: attr('Moderated'),
    parent: belongsTo('ember-flexberry-dummy-suggestion-type', 'Parent', {
      name: attr('Name', { hidden: true })
    }, { displayMemberPath: 'name' })
  });
};
