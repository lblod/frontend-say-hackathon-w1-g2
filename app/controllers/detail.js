// controllers/requests.js or routes/requests.js
import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class DetailController extends Controller {
  @service currentSession;
}
