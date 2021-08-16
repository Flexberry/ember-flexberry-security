import EditFormController from 'ember-flexberry/controllers/edit-form';
import LinkGroupValidationMixin from '../mixins/security-link-group-controller-validations';

export default EditFormController.extend(LinkGroupValidationMixin, {
  parentRoute: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group-l',
});
