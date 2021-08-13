import { validator, buildValidations } from 'ember-cp-validations';
import LinkGroupModel from 'ember-flexberry-data/models/i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group';

let ValidationRules = {
  createTime: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group.validations.createTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  creator: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group.validations.creator.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  editTime: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group.validations.editTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  editor: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group.validations.editor.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  group: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group.validations.group.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  user: {
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

let Model = LinkGroupModel.reopen(Validations);

export default Model;
