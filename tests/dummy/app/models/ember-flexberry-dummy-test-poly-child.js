import { Model as TestPolyChildMixin, defineProjections } from '../mixins/regenerated/models/ember-flexberry-dummy-test-poly-child';
import TestPolyBaseModel from './ember-flexberry-dummy-test-poly-base';
let Model = TestPolyBaseModel.extend(TestPolyChildMixin, {

});
defineProjections(Model);
export default Model;
