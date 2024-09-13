import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default class RequestsRoute extends Route {
  @service currentSession;
  @service session;
  beforeModel(transition) {
    this.session.requireAuthentication(transition, 'login');
  }
}
