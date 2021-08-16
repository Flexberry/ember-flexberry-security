import EditFormController from 'ember-flexberry/controllers/edit-form';
import EditFormControllerOperationsIndicationMixin from 'ember-flexberry/mixins/edit-form-controller-operations-indication';
import AgentValidationMixin from '../mixins/security-agent-controller-validations';

export default EditFormController.extend(EditFormControllerOperationsIndicationMixin, AgentValidationMixin, {
  parentRoute: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-group-l',
});
