import EmberRouter from '@ember/routing/router';
import config from 'frontend-say-hackathon-w1-g2/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('mock-login');
  this.route('login');
  // this.route("auth", { path: "/authorization" }, function () {
  //   this.route("callback");
  //   this.route("logout");
  // });

  this.route('requests');
});
