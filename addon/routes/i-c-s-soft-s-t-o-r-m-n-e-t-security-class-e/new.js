import EditFormNewRoute from 'ember-flexberry/routes/edit-form-new';

export default EditFormNewRoute.extend({
  modelProjection: 'Sec_SubjectE',
  modelName: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-subject',
  templateName: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-class-e',
  afterModel: function (model) {
    model.set('isAttribute', false);
    model.set('isOperation', false);
    model.set('isView', false);
    model.set('isClass', true);
  }
});
