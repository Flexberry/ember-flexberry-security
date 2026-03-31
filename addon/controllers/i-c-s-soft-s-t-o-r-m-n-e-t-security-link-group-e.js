import EditFormController from 'ember-flexberry/controllers/edit-form';
import LinkGroupValidationMixin from '../mixins/security-link-group-controller-validations';
import LookupCustomPropertiesMixin from '../mixins/lookup-custom-properties';

export default EditFormController.extend(LinkGroupValidationMixin, LookupCustomPropertiesMixin, {
  getLookupCustomProperties : this.get('actions.getLookupCustomProperties'),
  parentRoute: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group-l',
});
