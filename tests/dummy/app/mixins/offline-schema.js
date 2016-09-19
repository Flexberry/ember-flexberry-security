import Ember from 'ember';

export default Ember.Mixin.create({
  init() {
    this.set('offlineSchema', {
      'ember-flexberry-data': {
        'ember-flexberry-dummy-application-user':
          'id,name,eMail,phone1,phone2,phone3,activated,vK,facebook,twitter,birthday,gender,vip,karma,createTime,creator,editTime,editor',
        'ember-flexberry-dummy-comment-vote':
          'id,voteType,createTime,creator,editTime,editor,applicationUser,comment',
        'ember-flexberry-dummy-comment':
          'id,text,votes,moderated,createTime,creator,editTime,editor,author,suggestion,*userVotes',
        'ember-flexberry-dummy-localization':
          'id,name,createTime,creator,editTime,editor',
        'ember-flexberry-dummy-localized-suggestion-type':
          'id,name,createTime,creator,editTime,editor,localization,suggestionType',
        'ember-flexberry-dummy-suggestion-file':
          'id,order,file,createTime,creator,editTime,editor,suggestion',
        'ember-flexberry-dummy-suggestion-type':
          'id,name,moderated,createTime,creator,editTime,editor,parent,*localizedTypes',
        'ember-flexberry-dummy-suggestion':
          'id,address,text,date,votes,moderated,createTime,creator,editTime,editor,type,editor1,author,*userVotes,*files,*comments',
        'ember-flexberry-dummy-test-poly-base':
          'id,pole',
        'ember-flexberry-dummy-test-poly-child':
          'id,childPole',
        'ember-flexberry-dummy-test-poly':
          'id,selfPole,relation',
        'ember-flexberry-dummy-vote':
          'id,voteType,createTime,creator,editTime,editor,applicationUser,suggestion',
      },
    });
    return this._super(...arguments);
  },
});
