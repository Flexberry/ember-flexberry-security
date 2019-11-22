import Mixin from '@ember/object/mixin';
import DS from 'ember-data';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';
export let Model = Mixin.create({
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
    address: attr('Address'),
    text: attr('Text'),
    date: attr('Date'),
    votes: attr('Votes'),
    moderated: attr('Moderated'),
    type: belongsTo('ember-flexberry-dummy-suggestion-type', 'Type', {
      name: attr('Name')
    }),
    author: belongsTo('ember-flexberry-dummy-application-user', 'Author', {
      name: attr('Name')
    }),
    files: hasMany('ember-flexberry-dummy-suggestion-file', 'Files', {
      order: attr('Order'),
      file: attr('File')
    }),
    comments: hasMany('ember-flexberry-dummy-comment', 'Comments', {
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
    }),
    userVotes: hasMany('ember-flexberry-dummy-vote', 'User votes', {
      voteType: attr('Vote type'),
      applicationUser: belongsTo('ember-flexberry-dummy-application-user', 'Application user', {
        name: attr('Name', { hidden: true })
      }, { displayMemberPath: 'name' })
    })
  });
  model.defineProjection('SuggestionE', 'ember-flexberry-dummy-suggestion', {
    address: attr('Address'),
    text: attr('Text'),
    date: attr('Date'),
    votes: attr('Votes'),
    moderated: attr('Moderated'),
    type: belongsTo('ember-flexberry-dummy-suggestion-type', 'Type', {
      name: attr('Name', { hidden: true })
    }, { displayMemberPath: 'name' }),
    author: belongsTo('ember-flexberry-dummy-application-user', 'Author', {
      name: attr('Name', { hidden: true })
    }, { displayMemberPath: 'name' }),
    editor1: belongsTo('ember-flexberry-dummy-application-user', 'Editor1', {
      name: attr('Name', { hidden: true })
    }),
    createTime: attr('', { hidden: true }),
    creator: attr('', { hidden: true }),
    editTime: attr('', { hidden: true }),
    editor: attr('', { hidden: true }),
    files: hasMany('ember-flexberry-dummy-suggestion-file', 'Files', {
      order: attr('Order'),
      file: attr('File'),
      suggestion: belongsTo('ember-flexberry-dummy-suggestion', '', {

      })
    }),
    userVotes: hasMany('ember-flexberry-dummy-vote', 'User votes', {
      voteType: attr('Vote type'),
      applicationUser: belongsTo('ember-flexberry-dummy-application-user', 'Application user', {
        name: attr('Name', { hidden: true })
      }, { displayMemberPath: 'name' }),
      suggestion: belongsTo('ember-flexberry-dummy-suggestion', '', {

      })
    }),
    comments: hasMany('ember-flexberry-dummy-comment', 'Comments', {
      text: attr('Text'),
      votes: attr('Votes'),
      moderated: attr('Moderated'),
      author: belongsTo('ember-flexberry-dummy-application-user', 'Author', {
        name: attr('Name', { hidden: true })
      }, { displayMemberPath: 'name' })
    })
  });
  model.defineProjection('SuggestionL', 'ember-flexberry-dummy-suggestion', {
    address: attr('Address'),
    text: attr('Text'),
    date: attr('Date'),
    votes: attr('Votes'),
    moderated: attr('Moderated'),
    type: belongsTo('ember-flexberry-dummy-suggestion-type', '', {
      name: attr('Name', { hidden: true })
    }, { displayMemberPath: 'name' }),
    author: belongsTo('ember-flexberry-dummy-application-user', '', {
      name: attr('Name', { hidden: true })
    }, { displayMemberPath: 'name' }),
    editor1: belongsTo('ember-flexberry-dummy-application-user', '', {
      name: attr('Name', { hidden: true })
    }, { displayMemberPath: 'name' }),
    createTime: attr('', { hidden: true }),
    creator: attr('', { hidden: true }),
    editTime: attr('', { hidden: true }),
    editor: attr('', { hidden: true })
  });
};
