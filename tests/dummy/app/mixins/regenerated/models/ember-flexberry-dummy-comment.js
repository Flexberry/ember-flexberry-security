import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  text: DS.attr('string'),
  votes: DS.attr('number'),
  moderated: DS.attr('boolean'),
  createTime: DS.attr('string'),
  creator: DS.attr('string'),
  editTime: DS.attr('string'),
  editor: DS.attr('string'),
  author: DS.belongsTo('ember-flexberry-dummy-application-user', { inverse: null, async: false }),
  suggestion: DS.belongsTo('ember-flexberry-dummy-suggestion', { inverse: 'comments', async: false }),
  userVotes: DS.hasMany('ember-flexberry-dummy-comment-vote', { inverse: 'comment', async: false }),
  validations: {
    author: { presence: true },
    suggestion: { presence: true }
  },

});
export let defineProjections = function (model) {
  model.defineProjection('AuditView', 'ember-flexberry-dummy-comment', {
    text: Projection.attr('Text'),
    votes: Projection.attr('Votes'),
    moderated: Projection.attr('Moderated'),
    author: Projection.belongsTo('ember-flexberry-dummy-application-user', 'Author', {
      name: Projection.attr('Name', { hidden: true })
    }, { displayMemberPath: 'name' }),
    userVotes: Projection.hasMany('ember-flexberry-dummy-comment-vote', 'User votes', {
      voteType: Projection.attr('Vote type'),
      applicationUser: Projection.belongsTo('ember-flexberry-dummy-application-user', 'Application user', {
        name: Projection.attr('Name', { hidden: true })
      }, { displayMemberPath: 'name' })
    })
  });
  model.defineProjection('CommentD', 'ember-flexberry-dummy-comment', {
    text: Projection.attr('Text'),
    votes: Projection.attr('Votes'),
    moderated: Projection.attr('Moderated'),
    author: Projection.belongsTo('ember-flexberry-dummy-application-user', 'Author', {
      name: Projection.attr('Name', { hidden: true })
    }, { displayMemberPath: 'name' })
  });
  model.defineProjection('CommentE', 'ember-flexberry-dummy-comment', {
    text: Projection.attr('Text'),
    votes: Projection.attr('Votes'),
    moderated: Projection.attr('Moderated'),
    author: Projection.belongsTo('ember-flexberry-dummy-application-user', 'Author', {
      name: Projection.attr('Name', { hidden: true }),
      phone1: Projection.attr('Phone 1', { hidden: true })
    }, { displayMemberPath: 'name' }),
    userVotes: Projection.hasMany('ember-flexberry-dummy-comment-vote', 'User votes', {
      voteType: Projection.attr('Vote type'),
      applicationUser: Projection.belongsTo('ember-flexberry-dummy-application-user', 'Application user', {
        name: Projection.attr('Name', { hidden: true })
      }, { displayMemberPath: 'name' })
    })
  });
};
