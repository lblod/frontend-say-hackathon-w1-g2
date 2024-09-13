// controllers/requests.js or routes/requests.js
import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class HandlingController extends Controller {
  @service currentSession;
}
