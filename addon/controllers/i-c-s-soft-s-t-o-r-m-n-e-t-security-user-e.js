import EditFormController from 'ember-flexberry/controllers/edit-form';
import SecurityUserEControllerMixin from '../mixins/security-user-e-controller';

export default EditFormController.extend(SecurityUserEControllerMixin, {
  // Caption of this particular edit form.

  parentRoute: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-user-l'
});
