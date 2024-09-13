import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { task } from 'ember-concurrency';

export default class MockLoginRoute extends Route {
  @service session;
  @service store;

  queryParams = {
    page: {
      refreshModel: true,
    },
  };

  async beforeModel() {
    if (this.session.isAuthenticated) {
      await this.currentSession.load();
      this.session.prohibitAuthentication('index');
    }
  }

  async model(params) {
    return { accounts: this.loadAccounts.perform(params) };
  }

  loadAccounts = task({ keepLatest: true }, async (params) => {
    return await this.store.query('account', {
      include: 'user,user.groups',
      filter: { provider: 'https://github.com/lblod/mock-login-service' },
      page: { size: 10, number: params.page },
    });
  });
}
