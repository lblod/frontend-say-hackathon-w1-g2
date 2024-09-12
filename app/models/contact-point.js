import { Model, attr } from "@ember-data/model";

export default class AddressModel extends Model {
  @attr email;
  @attr telephone;
  @attr fax;
  @attr website;
  @attr type;

  @belongsTo("address", {
    async: true,
  })
  contactAddress;
}
