import __BaseModel from './base';
import { Offline } from 'ember-flexberry-data';
import { Model as ApplicationUserMixin, defineProjections } from '../mixins/regenerated/models/ember-flexberry-dummy-application-user';

let Model = __BaseModel.extend(ApplicationUserMixin, Offline.ModelMixin, {

});
defineProjections(Model);
export default Model;
