import DS from 'ember-data';

export default DS.Model.extend({
  checked: DS.attr('boolean'),
  readonly: false,
  model: null
});
