import Mixin from '@ember/object/mixin';
import { Promise } from 'rsvp';
import SecurityAssignDataObject from '../objects/security-assign-data';
import SecurityAssignDataRowObject from '../objects/security-assign-data-row';
import SecurityAssignDataCellObject from '../objects/security-assign-data-cell';
import Builder from 'ember-flexberry-data/query/builder';
import FilterOperator from 'ember-flexberry-data/query/filter-operator';
import Condition from 'ember-flexberry-data/query/condition';
import { SimplePredicate, ComplexPredicate } from 'ember-flexberry-data/query/predicate';

export default Mixin.create({
  getAgentGroups(model, varName) {
    return new Promise((resolve, reject) => {
      let _this = this;
      let i18n = _this.get('i18n');
      let _userGroups = SecurityAssignDataObject.create({
        headers: [
          i18n.t('forms.i-c-s-soft-s-t-o-r-m-n-e-t-security-user-e.user-groups-name'),
          i18n.t('forms.i-c-s-soft-s-t-o-r-m-n-e-t-security-user-e.user-groups-assign')
        ],
        rows: [],
        hasContent: false
      });
      _this.set(varName, _userGroups);
      let modelName = 'i-c-s-soft-s-t-o-r-m-n-e-t-security-agent';

      let isGroupPredicate = new SimplePredicate('isGroup', FilterOperator.Eq, true);
      let enabledPredicate = new SimplePredicate('enabled', FilterOperator.Eq, true);
      let predicate = new ComplexPredicate(Condition.And, isGroupPredicate, enabledPredicate);

      let builder = new Builder(_this.store, modelName)
        .select('id,name,isGroup')
        .where(predicate)
        .orderBy('name asc');

      let _groups;

      _this.store.query(modelName, builder.build()).then(function (groups) {
        _groups = groups;
      }).catch(error => { reject(error); }).then(() => {
        // Load LinkGroups for user.
        modelName = 'i-c-s-soft-s-t-o-r-m-n-e-t-security-link-group';
        builder = new Builder(_this.store, modelName)
          .select('id,group.name')
          .where('user', FilterOperator.Eq, model.get('id'))
          .orderBy('group.name asc');

        _this.store.query(modelName, builder.build()).then(function (linkGroups) {

          _groups.forEach(group => {
            let groupName = group.get('name');
            let cellObject;
            linkGroups.forEach(linkGroup => {
              if (groupName === linkGroup.get('group.name')) {
                cellObject = SecurityAssignDataCellObject.create({ checked: true, readonly: false, model: linkGroup, inited: true });
              }
            });

            if (!cellObject) {
              cellObject = SecurityAssignDataCellObject.create({ checked: false, readonly: false, model: null, inited: true });
            }

            _userGroups.rows.push(SecurityAssignDataRowObject.create({
              name: groupName,
              columns: [cellObject],
              model: group
            }));
            _userGroups.hasContent = true;
          });

          resolve();
        }).catch(error => { reject(error); });
      });
    });
  },
});
