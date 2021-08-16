import EditFormController from 'ember-flexberry/controllers/edit-form';
import EditFormControllerOperationsIndicationMixin from 'ember-flexberry/mixins/edit-form-controller-operations-indication';
import SecurityRoleEControllerMixin from '../mixins/security-role-e-controller';
import AgentValidationMixin from '../mixins/security-agent-controller-validations';

export default EditFormController.extend(EditFormControllerOperationsIndicationMixin, SecurityRoleEControllerMixin, AgentValidationMixin, {
  parentRoute: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-role-l'
});
