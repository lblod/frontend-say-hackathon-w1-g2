import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AuthSwitchRoute extends Route {
  @service router;
  @service session;

  async beforeModel(transition) {
    this.session.requireAuthentication(transition, 'login');
    try {
      await this.session.invalidate();
      const logoutUrl = this.router.urlFor('mock-login');

      window.location.replace(logoutUrl);
    } catch (error) {
      throw new Error(
        'Something went wrong while trying to remove the session on the server',
        {
          cause: error,
        },
      );
    }
  }
}

export function buildSwitchUrl({ logoutUrl, clientId, switchRedirectUrl }) {
  let switchUrl = new URL(logoutUrl);
  let searchParams = switchUrl.searchParams;

  searchParams.append('switch', true);
  searchParams.append('client_id', clientId);
  searchParams.append('post_logout_redirect_uri', switchRedirectUrl);

  return switchUrl.href;
}
