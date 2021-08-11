import { buildValidations } from 'ember-cp-validations';
import __BaseModel from './base';

import {
  defineProjections,
  ValidationRules,
  Model as LinkViewMixin
} from '../mixins/regenerated/models/i-c-s-soft-s-t-o-r-m-n-e-t-security-link-view';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = __BaseModel.extend(LinkViewMixin, Validations, {
});

defineProjections(Model);

export default Model;
