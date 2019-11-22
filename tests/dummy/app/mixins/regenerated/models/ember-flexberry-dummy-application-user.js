import Mixin from '@ember/object/mixin';
import DS from 'ember-data';
import { attr } from 'ember-flexberry-data/utils/attributes';
export let Model = Mixin.create({
  name: DS.attr('string'),
  eMail: DS.attr('string'),
  phone1: DS.attr('string'),
  phone2: DS.attr('string'),
  phone3: DS.attr('string'),
  activated: DS.attr('boolean'),
  vK: DS.attr('string'),
  facebook: DS.attr('string'),
  twitter: DS.attr('string'),
  birthday: DS.attr('date'),
  gender: DS.attr('ember-flexberry-dummy-gender'),
  vip: DS.attr('boolean'),
  karma: DS.attr('decimal'),
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
  editor: DS.attr('string'),
  validations: {
    name: { presence: true },
    eMail: { presence: true }
  },

});
export let defineProjections = function (model) {
  model.defineProjection('ApplicationUserE', 'ember-flexberry-dummy-application-user', {
    name: attr('Name'),
    eMail: attr('E-mail'),
    phone1: attr('Phone1'),
    phone2: attr('Phone2'),
    phone3: attr('Phone3'),
    activated: attr('Activated'),
    vK: attr('VK'),
    facebook: attr('Facebook'),
    twitter: attr('Twitter'),
    birthday: attr('Birthday'),
    gender: attr('Gender'),
    vip: attr('Vip'),
    karma: attr('Karma')
  });
  model.defineProjection('ApplicationUserL', 'ember-flexberry-dummy-application-user', {
    name: attr('Name'),
    eMail: attr('E-mail'),
    activated: attr('Activated'),
    birthday: attr('Birthday'),
    gender: attr('Gender'),
    karma: attr('Karma')
  });
  model.defineProjection('AuditView', 'ember-flexberry-dummy-application-user', {
    name: attr('Name'),
    eMail: attr('E mail'),
    phone1: attr('Phone1'),
    phone2: attr('Phone2'),
    phone3: attr('Phone3'),
    activated: attr('Activated'),
    vK: attr('VK'),
    facebook: attr('Facebook'),
    twitter: attr('Twitter'),
    birthday: attr('Birthday'),
    gender: attr('Gender'),
    vip: attr('Vip'),
    karma: attr('Karma')
  });
};
