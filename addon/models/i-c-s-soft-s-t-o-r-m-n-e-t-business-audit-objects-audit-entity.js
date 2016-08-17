import { Model as AuditEntityMixin, defineProjections } from '../mixins/regenerated/models/i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity';
import __BaseModel from './base';
let Model = __BaseModel.extend(AuditEntityMixin, {

});
defineProjections(Model);
export default Model;
