import { validator, buildValidations } from 'ember-cp-validations';
import SessionModel from 'ember-flexberry-data/models/i-c-s-soft-s-t-o-r-m-n-e-t-security-session';

let ValidationRules = {
  userKey: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-session.validations.userKey.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  startedAt: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-session.validations.startedAt.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  lastAccess: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-session.validations.lastAccess.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  closed: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-session.validations.closed.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = SessionModel.reopen(Validations);

export default Model;
