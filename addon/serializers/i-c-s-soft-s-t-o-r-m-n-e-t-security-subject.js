import { Serializer as SubjectSerializer } from
  '../mixins/regenerated/serializers/i-c-s-soft-s-t-o-r-m-n-e-t-security-subject';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(SubjectSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
