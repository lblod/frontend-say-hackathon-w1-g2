import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class MockLoginRoute extends Route {
  @service session;
  @service store;

  queryParams = {
    page: {
      refreshModel: true,
    },
  };



}
