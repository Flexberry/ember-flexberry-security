import { Serializer as FilterSerializer } from
  '../mixins/regenerated/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-security-filter';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(FilterSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
