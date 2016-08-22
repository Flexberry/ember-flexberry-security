import EditFormNewRoute from 'ember-flexberry/routes/edit-form-new';

export default EditFormNewRoute.extend({
  modelProjection: 'Sec_NotUserL',
  modelName: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-agent',
  templateName: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-role-e',
  afterModel: function (model) {
    model.set('isUser', false);
    model.set('isGroup', false);
    model.set('isRole', true);
  }
});
