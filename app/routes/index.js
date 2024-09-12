import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default class IndexRoute extends Route {
  @service session;
  @service router;
  @service currentSession;
  async beforeModel(transition) {
    this.session.requireAuthentication(transition, 'login');
    if (this.session.isAuthenticated) {
      await this.currentSession.load();
      this.router.transitionTo('requests');
    }
  }
}
