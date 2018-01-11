import EditFormController from 'ember-flexberry/controllers/edit-form';
import EditFormControllerOperationsIndicationMixin from 'ember-flexberry/mixins/edit-form-controller-operations-indication';
import SecurityRoleEControllerMixin from '../mixins/security-role-e-controller';

export default EditFormController.extend(EditFormControllerOperationsIndicationMixin, SecurityRoleEControllerMixin, {
  // Caption of this particular edit form.

  parentRoute: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-role-l'
});
