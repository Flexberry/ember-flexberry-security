import Ember from 'ember';

export default Ember.Mixin.create({
  init() {
    this.set('offlineSchema', {
      'ember-flexberry-data': {
        1: {
          'i-c-s-soft-s-t-o-r-m-n-e-t-security-access':
            'id,typeAccess,createTime,creator,editTime,editor,filter,permition',
          'i-c-s-soft-s-t-o-r-m-n-e-t-security-filter':
            'id,filterText,name,filterTypeNView,createTime,creator,editTime,editor,subject',
          'i-c-s-soft-s-t-o-r-m-n-e-t-security-impersonalization':
            'id,createTime,creator,editTime,editor,user,agent',
          'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-attribute':
            'id,createTime,creator,editTime,editor,view,attribute',
          'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-operation':
            'id,createTime,creator,editTime,editor,operation,class',
          'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role':
            'id,startDate,endDate,createTime,creator,editTime,editor,role,agent',
          'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-view':
            'id,createTime,creator,editTime,editor,view,class',
          'i-c-s-soft-s-t-o-r-m-n-e-t-security-permition':
            'id,createTime,creator,editTime,editor,agent,subject,access',
          'i-c-s-soft-s-t-o-r-m-n-e-t-security-subject':
            'id,nametype,isAttribute,isOperation,isView,isClass' +
            ',sharedOper,full,read,insert,update,delete,execute' +
            ',permitted,createTime,creator,editTime,editor',
        },
      },
    });
    return this._super(...arguments);
  }
});
