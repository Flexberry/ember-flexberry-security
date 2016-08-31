import EditFormNewRoute from 'ember-flexberry/routes/edit-form-new';

export default EditFormNewRoute.extend({
  modelProjection: 'UserE',
  modelName: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-agent',
  templateName: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-user-e',
  afterModel: function(model) {
    model.set('isUser', true);
    model.set('isGroup', false);
    model.set('isRole', false);
    model.set('enabled', true);
  }
});
