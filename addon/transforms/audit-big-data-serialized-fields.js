import Ember from 'ember';
import DS from 'ember-data';

/**
  Transformation for model's attributes defined as <a href="http://emberjs.com/api/data/#method_attr">DS.attr</a> with type 'string'.
  It extends <a href="http://emberjs.com/api/data/classes/DS.StringTransform.html">string transformation</a> from ember data.
  @class AuditBigDataSerializedFieldsTransform
  @extends <a href="http://emberjs.com/api/data/classes/DS.StringTransform.html">DS.StringTransform</a>
*/
export default DS.StringTransform.extend({
  /**
    Deserializes serialized attribute value.
   */
  deserialize(serialized) {
    return Ember.isEmpty(serialized) ? null : serialized;
  },

  /**
    Serializes deserialized attribute value.
   */
  serialize(deserialized) {
    return Ember.isEmpty(deserialized) ? null : deserialized;
  }
});
