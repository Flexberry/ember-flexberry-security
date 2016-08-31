import EditFormNewRoute from 'ember-flexberry/routes/edit-form-new';

export default EditFormNewRoute.extend({
  modelProjection: 'RoleOrGroupE',
  modelName: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-agent',
  templateName: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-group-e',
  afterModel: function (model) {
    model.set('isUser', false);
    model.set('isGroup', true);
    model.set('isRole', false);
    model.set('enabled', true);
  }
});
