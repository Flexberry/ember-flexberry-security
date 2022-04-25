import Mixin from '@ember/object/mixin';
import { buildValidations, validator } from 'ember-cp-validations';
import { computed } from '@ember/object';

let ValidationRules = {
  'model.name': {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-agent.validations.name.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  'model.isUser': {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-agent.validations.isUser.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  'model.isGroup': {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-agent.validations.isGroup.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  'model.isRole': {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-agent.validations.isRole.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  'model.createTime': {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-agent.validations.createTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  'model.editTime': {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-agent.validations.editTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
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
