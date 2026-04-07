import { attr, belongsTo } from 'ember-flexberry-data/utils/attributes';
import {
    Model as LinkGroupMixin,
    defineProjections as baseDefineProjections,
    ValidationRules
} from 'ember-flexberry-data/mixins/regenerated/models/i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group';
import { buildValidations } from 'ember-cp-validations';
import __BaseModel from './base';

const Validations = buildValidations(ValidationRules, {
    dependentKeys: ['model.i18n.locale'],
});

let Model = __BaseModel.extend(LinkGroupMixin, Validations, {});

baseDefineProjections(Model);

Model.defineProjection('Sec_LinkGroupL', 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group', {
    user: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', 'Юзер', {
        name: attr('Юзер', { index: 0 }),
    }, { index: 2, displayMemberPath: 'name' }),
    group: belongsTo('i-c-s-soft-s-t-o-r-m-n-e-t-security-agent', 'Группа', {
        name: attr('Группа', { index: 1 }),
    }, { index: 3, displayMemberPath: 'name' }),
    createTime: attr('Дата создания', { index: 4 }),
    creator: attr('Создатель', { index: 5 }),
    editTime: attr('Дата изменения', { index: 6 }),
    editor: attr('Редактор', { index: 7 }),
});

export default Model;