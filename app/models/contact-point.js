import Model, { attr, belongsTo } from '@ember-data/model';

export default class ContactPointModel extends Model {
  @attr email;
  @attr telephone;
  @attr fax;
  @attr website;
  @attr type;

  @belongsTo('address', {
    async: true,
  })
  contactAddress;
}
