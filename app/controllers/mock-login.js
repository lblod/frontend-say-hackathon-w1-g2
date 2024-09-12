import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { task } from 'ember-concurrency';

export default class MockLoginController extends Controller {
  @service store;
  @tracked accounts = [];
  @task({ drop: true })
  *getAccounts(params) {
    const accounts = yield this.store.query("account", {
      include: "user,user.groups",
      filter: { provider: "https://github.com/lblod/mock-login-service" },
      page: { size: 10, number: params.page },
    });
    return accounts;
  }

  constructor() {
    super(...arguments);
    this.getAccounts.perform({ page: 1 });
  }
}