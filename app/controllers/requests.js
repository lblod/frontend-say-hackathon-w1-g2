// controllers/requests.js or routes/requests.js
import Controller from '@ember/controller';

export default class RequestsController extends Controller {
  getPillSkin(status) {
    switch (status.toLowerCase()) {
      case 'ongoing':
        return 'ongoing';
      case 'completed':
        return 'success';
      case 'pending':
        return 'warning';
      case 'failed':
        return 'danger';
      default:
        return 'default';
    }
  }

  getPillIcon(status) {
    switch (status.toLowerCase()) {
      case 'ongoing':
        return 'circle';
      case 'completed':
        return 'circle-check';
      case 'pending':
        return 'clock';
      case 'failed':
        return 'circle-x';
    }
  }
}
