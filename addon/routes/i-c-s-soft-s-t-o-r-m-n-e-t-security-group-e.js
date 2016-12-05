import EditFormRoute from 'ember-flexberry/routes/edit-form';
import EditFormRouteOperationsIndicationMixin from '../mixins/edit-form-route-operations-indication';

export default EditFormRoute.extend(EditFormRouteOperationsIndicationMixin, {
  modelProjection: 'RoleOrGroupE',
  modelName: 'i-c-s-soft-s-t-o-r-m-n-e-t-security-agent'
});
