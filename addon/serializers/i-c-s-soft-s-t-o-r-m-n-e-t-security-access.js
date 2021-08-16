import { Serializer as AccessSerializer } from
  '../mixins/regenerated/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-security-access';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(AccessSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
