import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  voteType: DS.attr('ember-flexberry-dummy-vote-type'),
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
  editor: DS.attr('string'),
  applicationUser: DS.belongsTo('ember-flexberry-dummy-application-user', { inverse: null, async: false }),
  comment: DS.belongsTo('ember-flexberry-dummy-comment', { inverse: 'userVotes', async: false }),
  validations: {
    applicationUser: { presence: true },
    comment: { presence: true }
  },

});
export let defineProjections = function (model) {
  model.defineProjection('AuditView', 'ember-flexberry-dummy-comment-vote', {
    voteType: Projection.attr('Vote type'),
    applicationUser: Projection.belongsTo('ember-flexberry-dummy-application-user', 'Application user', {
      name: Projection.attr('Name', { hidden: true })
    }, { displayMemberPath: 'name' })
  });
  model.defineProjection('CommentVoteE', 'ember-flexberry-dummy-comment-vote', {
    voteType: Projection.attr('Vote type'),
    applicationUser: Projection.belongsTo('ember-flexberry-dummy-application-user', 'Application user', {
      name: Projection.attr('Name', { hidden: true })
    }, { displayMemberPath: 'name' }),
    comment: Projection.belongsTo('ember-flexberry-dummy-comment', '', {

    })
  });
};
