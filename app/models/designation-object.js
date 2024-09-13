import { Model, belongsTo } from '@ember-data/model';

export default class DesignationObjectsModel extends Model {
  @belongsTo('location-element-parcel', { async: true })
  locationElementParcel;
}
