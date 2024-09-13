import { Model, attr, belongsTo } from '@ember-data/model';

export default class LocationElementParcelModel extends Model {
  @attr name;
  @attr cadastralInformationDepartment;
  @attr section;
  @attr number;

  @belongsTo('address', { async: true }) address;
}
