import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
export default class DetailRoute extends Route {
  @service currentSession;
  @service session;
  @service store;
  @tracked user = this.currentSession;

  beforeModel(transition) {
    this.session.requireAuthentication(transition, 'login');
  }

  async model(params) {
    const model = await this.store.findRecord('application-case', params.id, {
      include: 'designation-object',
    });

    return model;
  }
}
