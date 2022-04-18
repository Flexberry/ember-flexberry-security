import { buildValidations } from 'ember-cp-validations';
import __BaseModel from './base';

import {
  defineProjections,
  ValidationRules, 
  Model as AuditRecordMixin 
} from '../mixins/regenerated/models/new-platform-flexberry-audit-big-data-audit-record';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = __BaseModel.extend(AuditRecordMixin, Validations, {

});

defineProjections(Model);

export default Model;