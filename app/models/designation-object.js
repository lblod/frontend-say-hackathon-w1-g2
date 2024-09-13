import Model, { belongsTo } from '@ember-data/model';

export default class DesignationObjectModel extends Model {
  @belongsTo('location-element-parcel', { async: true, inverse: null })
  locationElementParcel;
}
