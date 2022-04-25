import ListFormController from 'ember-flexberry/controllers/list-form';

export default ListFormController.extend({
  /**
    Name of related edit form route.
    @property editFormRoute
    @type String
    @default 'new-platform-flexberry-audit-big-data-audit-record-e'
   */
  editFormRoute: 'new-platform-flexberry-audit-big-data-audit-record-e',
  queryParams: ['filterByObjectId', 'filterByObjectType'],
  filterByObjectId: null,
  filterByObjectType: null
});
