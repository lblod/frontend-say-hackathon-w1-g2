import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default class RequestsRoute extends Route {
  @service currentSession;
  @service session;
  @service store;

  beforeModel(transition) {
    this.session.requireAuthentication(transition, 'login');
  }
  async model() {
    const requests = await this.store.findAll('application-case');
    console.log('requests', requests);
    return {
      requests,
    };
  }
}
