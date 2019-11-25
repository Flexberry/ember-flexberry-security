import StoreMixin from 'ember-flexberry-data/mixins/store';
import OfflineStore from 'ember-flexberry-data/stores/base-store';
import OfflineSchemaMixin from 'ember-flexberry-security/mixins/offline-schema';

export default OfflineStore.reopen(StoreMixin, OfflineSchemaMixin, {
  init() {
    this.set('offlineSchema', {
      'ember-flexberry-data': {
        1: {
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

          'new-platform-flexberry-flexberry-user-setting':
            'id,appName,userName,moduleName,settName,settLastAccessTime,txtVal',
          'i-i-s-caseberry-logging-objects-application-log':
            'id,category,eventId,priority,severity,title,timestamp,machineName,appDomainName,processId,processName,threadName,win32ThreadId,message',
          'new-platform-flexberry-services-lock':
            'id,lockKey,userName,lockDate',
        },
      },
    });
    return this._super(...arguments);
  }
});
