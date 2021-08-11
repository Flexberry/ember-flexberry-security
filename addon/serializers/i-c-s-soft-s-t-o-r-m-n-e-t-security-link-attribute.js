import { Serializer as LinkAttributeSerializer } from
  '../mixins/regenerated/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-security-link-attribute';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(LinkAttributeSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
