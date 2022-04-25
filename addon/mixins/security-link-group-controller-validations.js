import Mixin from '@ember/object/mixin';
import { buildValidations, validator } from 'ember-cp-validations';
import { computed } from '@ember/object';

let ValidationRules = {
  'model.createTime': {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group.validations.createTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  'model.editTime': {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group.validations.editTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  'model.group': {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group.validations.group.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  'model.user': {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group.validations.user.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

export default Mixin.create(Validations, {
    /**
   * То что подлежит валидации, по умолчанию это модель, но при валидации в контроллере, это сам контроллер.
   *
   * @property validationObject
   */
  validationObject: computed(function() {
    return this;
  }),
});
