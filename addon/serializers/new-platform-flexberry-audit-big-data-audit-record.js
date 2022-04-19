import { Serializer as AuditRecordSerializer } from '../mixins/regenerated/serializers/new-platform-flexberry-audit-big-data-audit-record';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(AuditRecordSerializer, {
    /**
    * Field name where object identifier is kept.
    */
    primaryKey: '__PrimaryKey'
});
