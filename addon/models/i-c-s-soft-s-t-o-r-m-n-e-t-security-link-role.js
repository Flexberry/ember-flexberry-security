import { buildValidations } from 'ember-cp-validations';
import __BaseModel from './base';

import {
  defineProjections,
  ValidationRules,
  Model as LinkRoleMixin
} from '../mixins/regenerated/models/i-c-s-soft-s-t-o-r-m-n-e-t-security-link-role';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = __BaseModel.extend(LinkRoleMixin, Validations, {
});

defineProjections(Model);

export default Model;
