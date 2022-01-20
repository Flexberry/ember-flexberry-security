import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import tTypeAccessEnum from '../enums/i-c-s-soft-s-t-o-r-m-n-e-t-security-t-type-access';

export default FlexberryEnum.extend({
  enum: tTypeAccessEnum,
  sourceType: 'ICSSoft.STORMNET.Security.tTypeAccess'
});
