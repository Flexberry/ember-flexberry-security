import Mixin from '@ember/object/mixin';
import DS from 'ember-data';
import { attr, belongsTo } from 'ember-flexberry-data/utils/attributes';
export let Model = Mixin.create({
  voteType: DS.attr('ember-flexberry-dummy-vote-type'),
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
  editor: DS.attr('string'),
  applicationUser: DS.belongsTo('ember-flexberry-dummy-application-user', { inverse: null, async: false }),
  suggestion: DS.belongsTo('ember-flexberry-dummy-suggestion', { inverse: 'userVotes', async: false }),
  validations: {
    applicationUser: { presence: true },
    suggestion: { presence: true }
  },

});
export let defineProjections = function (model) {
  model.defineProjection('AuditView', 'ember-flexberry-dummy-vote', {
    voteType: attr('Vote type'),
    applicationUser: belongsTo('ember-flexberry-dummy-application-user', 'Application user', {
      name: attr('Name', { hidden: true })
    }, { displayMemberPath: 'name' })
  });
  model.defineProjection('VoteE', 'ember-flexberry-dummy-vote', {
    voteType: attr('Vote type'),
    applicationUser: belongsTo('ember-flexberry-dummy-application-user', 'Application user', {
      name: attr('Name', { hidden: true })
    }, { displayMemberPath: 'name' }),
    suggestion: belongsTo('ember-flexberry-dummy-suggestion', '', {

    })
  });
};
