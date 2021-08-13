import { validator, buildValidations } from 'ember-cp-validations';
import AgentModel from 'ember-flexberry-data/models/i-c-s-soft-s-t-o-r-m-n-e-t-security-agent';

let ValidationRules = {
  name: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-agent.validations.name.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  login: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-agent.validations.login.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  pwd: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-agent.validations.pwd.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  isUser: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-agent.validations.isUser.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  isGroup: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-agent.validations.isGroup.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  isRole: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-agent.validations.isRole.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  connString: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-agent.validations.connString.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  enabled: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-agent.validations.enabled.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  email: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-agent.validations.email.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  comment: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-agent.validations.comment.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  domain: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-agent.validations.domain.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  agentKey: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-agent.validations.agentKey.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  full: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-agent.validations.full.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  read: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-agent.validations.read.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  insert: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-agent.validations.insert.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  update: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-agent.validations.update.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  delete: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-agent.validations.delete.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  execute: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-agent.validations.execute.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  createTime: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-agent.validations.createTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  creator: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-agent.validations.creator.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  editTime: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-agent.validations.editTime.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  editor: {
    descriptionKey: 'models.i-c-s-soft-s-t-o-r-m-n-e-t-security-agent.validations.editor.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = AgentModel.reopen(Validations);

export default Model;
