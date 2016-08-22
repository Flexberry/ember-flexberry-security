import __BaseModel from './base';
import { Model as ApplicationUserMixin, defineProjections } from '../mixins/regenerated/models/ember-flexberry-dummy-application-user';

let Model = __BaseModel.extend(ApplicationUserMixin, {

});
defineProjections(Model);
export default Model;
