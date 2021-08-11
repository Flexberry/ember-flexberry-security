import { Serializer as LinkViewSerializer } from
  '../mixins/regenerated/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-security-link-view';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(LinkViewSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
