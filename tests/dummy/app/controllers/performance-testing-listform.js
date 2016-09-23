import ListFormController from 'ember-flexberry/controllers/list-form';

export default ListFormController.extend({
  /**
    Name of related edit form route.

    @property editFormRoute
    @type String
    @default 'i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-e'
   */
  editFormRoute: 'i-c-s-soft-s-t-o-r-m-n-e-t-business-audit-objects-audit-entity-e',
  queryExecTime: null,
  objectsCount: 0,
  perPage: 50

});
