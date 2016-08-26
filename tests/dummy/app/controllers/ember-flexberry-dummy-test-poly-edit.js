import EditFormController from 'ember-flexberry/controllers/edit-form';
import ShowAuditActionControllerMixin from 'ember-flexberry-security/mixins/show-audit-action-controller';

export default EditFormController.extend(ShowAuditActionControllerMixin, {
  // Caption of this particular edit form.

  parentRoute: 'ember-flexberry-dummy-test-poly-list',
});
