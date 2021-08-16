import { Serializer as PermitionSerializer } from
  '../mixins/regenerated/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-security-permition';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(PermitionSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
