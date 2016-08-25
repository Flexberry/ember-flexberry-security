import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  address: DS.attr('string'),
  text: DS.attr('string'),
  date: DS.attr('date'),
  votes: DS.attr('number'),
  moderated: DS.attr('boolean'),
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
  editor: DS.attr('string'),
  type: DS.belongsTo('ember-flexberry-dummy-suggestion-type', { inverse: null, async: false }),
  editor1: DS.belongsTo('ember-flexberry-dummy-application-user', { inverse: null, async: false }),
  author: DS.belongsTo('ember-flexberry-dummy-application-user', { inverse: null, async: false }),
  userVotes: DS.hasMany('ember-flexberry-dummy-vote', { inverse: 'suggestion', async: false }),
  files: DS.hasMany('ember-flexberry-dummy-suggestion-file', { inverse: 'suggestion', async: false }),
  comments: DS.hasMany('ember-flexberry-dummy-comment', { inverse: 'suggestion', async: false }),
  validations: {
    type: { presence: true },
    editor1: { presence: true },
    author: { presence: true }
  },

});
export let defineProjections = function (model) {
  model.defineProjection('AuditView', 'ember-flexberry-dummy-suggestion', {
    address: Projection.attr('Address'),
    text: Projection.attr('Text'),
    date: Projection.attr('Date'),
    votes: Projection.attr('Votes'),
    moderated: Projection.attr('Moderated'),
    type: Projection.belongsTo('ember-flexberry-dummy-suggestion-type', 'Type', {
      name: Projection.attr('Name')
    }),
    author: Projection.belongsTo('ember-flexberry-dummy-application-user', 'Author', {
      name: Projection.attr('Name')
    }),
    files: Projection.hasMany('ember-flexberry-dummy-suggestion-file', 'Files', {
      order: Projection.attr('Order'),
      file: Projection.attr('File')
    }),
    comments: Projection.hasMany('ember-flexberry-dummy-comment', 'Comments', {
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
    }),
    userVotes: Projection.hasMany('ember-flexberry-dummy-vote', 'User votes', {
      voteType: Projection.attr('Vote type'),
      applicationUser: Projection.belongsTo('ember-flexberry-dummy-application-user', 'Application user', {
        name: Projection.attr('Name', { hidden: true })
      }, { displayMemberPath: 'name' })
    })
  });
  model.defineProjection('SuggestionE', 'ember-flexberry-dummy-suggestion', {
    address: Projection.attr('Address'),
    text: Projection.attr('Text'),
    date: Projection.attr('Date'),
    votes: Projection.attr('Votes'),
    moderated: Projection.attr('Moderated'),
    type: Projection.belongsTo('ember-flexberry-dummy-suggestion-type', 'Type', {
      name: Projection.attr('Name', { hidden: true })
    }, { displayMemberPath: 'name' }),
    author: Projection.belongsTo('ember-flexberry-dummy-application-user', 'Author', {
      name: Projection.attr('Name', { hidden: true })
    }, { displayMemberPath: 'name' }),
    editor1: Projection.belongsTo('ember-flexberry-dummy-application-user', 'Editor1', {
      name: Projection.attr('Name', { hidden: true })
    }),
    createTime: Projection.attr('', { hidden: true }),
    creator: Projection.attr('', { hidden: true }),
    editTime: Projection.attr('', { hidden: true }),
    editor: Projection.attr('', { hidden: true }),
    files: Projection.hasMany('ember-flexberry-dummy-suggestion-file', 'Files', {
      order: Projection.attr('Order'),
      file: Projection.attr('File'),
      suggestion: Projection.belongsTo('ember-flexberry-dummy-suggestion', '', {

      })
    }),
    userVotes: Projection.hasMany('ember-flexberry-dummy-vote', 'User votes', {
      voteType: Projection.attr('Vote type'),
      applicationUser: Projection.belongsTo('ember-flexberry-dummy-application-user', 'Application user', {
        name: Projection.attr('Name', { hidden: true })
      }, { displayMemberPath: 'name' }),
      suggestion: Projection.belongsTo('ember-flexberry-dummy-suggestion', '', {

      })
    }),
    comments: Projection.hasMany('ember-flexberry-dummy-comment', 'Comments', {
      text: Projection.attr('Text'),
      votes: Projection.attr('Votes'),
      moderated: Projection.attr('Moderated'),
      author: Projection.belongsTo('ember-flexberry-dummy-application-user', 'Author', {
        name: Projection.attr('Name', { hidden: true })
      }, { displayMemberPath: 'name' })
    })
  });
  model.defineProjection('SuggestionL', 'ember-flexberry-dummy-suggestion', {
    address: Projection.attr('Address'),
    text: Projection.attr('Text'),
    date: Projection.attr('Date'),
    votes: Projection.attr('Votes'),
    moderated: Projection.attr('Moderated'),
    type: Projection.belongsTo('ember-flexberry-dummy-suggestion-type', '', {
      name: Projection.attr('Name', { hidden: true })
    }, { displayMemberPath: 'name' }),
    author: Projection.belongsTo('ember-flexberry-dummy-application-user', '', {
      name: Projection.attr('Name', { hidden: true })
    }, { displayMemberPath: 'name' }),
    editor1: Projection.belongsTo('ember-flexberry-dummy-application-user', '', {
      name: Projection.attr('Name', { hidden: true })
    }, { displayMemberPath: 'name' }),
    createTime: Projection.attr('', { hidden: true }),
    creator: Projection.attr('', { hidden: true }),
    editTime: Projection.attr('', { hidden: true }),
    editor: Projection.attr('', { hidden: true })
  });
};
