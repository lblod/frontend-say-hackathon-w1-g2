import EmberRouter from '@ember/routing/router';
import config from 'frontend-say-hackathon-w1-g2/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('auth', { path: '/authorization' }, function () {
    this.route('login');
    this.route('logout');
    this.route('switch');
  });

  this.route('mock-login');
  this.route('login');
  this.route('requests', { path: '/overzicht' });
  this.route('detail', { path: 'detail/:id' });
  this.route('attachments', { path: 'detail/:id/bestanden' });
  this.route('404', {
    path: '/*wildcard',
  });
});
