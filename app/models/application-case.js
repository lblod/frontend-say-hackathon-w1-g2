import { Model, attr, belongsTo } from "@ember-data/model";

export default class LocationElementParcelModel extends Model {
  @attr submittedOn;
  @attr modifiedOn;
  @attr status;

  @belongsTo("designation-object", { async: true }) designationObject;
  @belongsTo("person", { async: true }) applicant;
}
