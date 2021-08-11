import { Serializer as ImpersonalizationSerializer } from
  '../mixins/regenerated/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-security-impersonalization';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ImpersonalizationSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
