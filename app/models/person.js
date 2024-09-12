import { Model, attr, belongsTo } from "@ember-data/model";

export default class PersonModel extends Model {
  @attr givenName;
  @attr familyName;
  @attr firstNameUsed;

  @belongsTo("contact-point", {
    async: true,
  })
  contactPoint;
}
