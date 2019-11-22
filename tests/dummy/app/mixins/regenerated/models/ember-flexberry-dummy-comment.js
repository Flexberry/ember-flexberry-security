import Mixin from '@ember/object/mixin';
import DS from 'ember-data';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';
export let Model = Mixin.create({
  text: DS.attr('string'),
  votes: DS.attr('number'),
  moderated: DS.attr('boolean'),
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
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
    text: attr('Text'),
    votes: attr('Votes'),
    moderated: attr('Moderated'),
    author: belongsTo('ember-flexberry-dummy-application-user', 'Author', {
      name: attr('Name', { hidden: true })
    }, { displayMemberPath: 'name' }),
    userVotes: hasMany('ember-flexberry-dummy-comment-vote', 'User votes', {
      voteType: attr('Vote type'),
      applicationUser: belongsTo('ember-flexberry-dummy-application-user', 'Application user', {
        name: attr('Name', { hidden: true })
      }, { displayMemberPath: 'name' })
    })
  });
  model.defineProjection('CommentD', 'ember-flexberry-dummy-comment', {
    text: attr('Text'),
    votes: attr('Votes'),
    moderated: attr('Moderated'),
    author: belongsTo('ember-flexberry-dummy-application-user', 'Author', {
      name: attr('Name', { hidden: true })
    }, { displayMemberPath: 'name' })
  });
  model.defineProjection('CommentE', 'ember-flexberry-dummy-comment', {
    suggestion: belongsTo('ember-flexberry-dummy-suggestion', 'Address', {
      address: attr('', { hidden: true })
    }),
    text: attr('Text'),
    votes: attr('Votes'),
    moderated: attr('Moderated'),
    author: belongsTo('ember-flexberry-dummy-application-user', 'Author', {
      name: attr('Name', { hidden: true }),
      phone1: attr('Phone 1', { hidden: true })
    }, { displayMemberPath: 'name' }),
    userVotes: hasMany('ember-flexberry-dummy-comment-vote', 'User votes', {
      voteType: attr('Vote type'),
      applicationUser: belongsTo('ember-flexberry-dummy-application-user', 'Application user', {
        name: attr('Name', { hidden: true })
      }, { displayMemberPath: 'name' }),
      comment: belongsTo('ember-flexberry-dummy-comment', '', {

      })
    })
  });
};
