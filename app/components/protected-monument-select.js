import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import fetch from 'fetch';
import { restartableTask, timeout } from 'ember-concurrency';

export default class ProtectedMonumentSelectComponent extends Component {
  @service store;

  @restartableTask
  *search(searchData) {
    yield timeout(400);
    const response = yield fetch(
      `https://inventaris.onroerenderfgoed.be/erfgoedobjecten?tekst=${searchData}`, {
          headers: {
          'Accept': 'application/json',
        },
      }
    );
    const suggestions = yield response.json();
    const detailedSuggestions = [];

    for (const suggestion of suggestions) {
      const responseDetails = yield fetch(
        `https://inventaris.onroerenderfgoed.be/erfgoedobjecten/${suggestion.id}`, {
            headers: {
            'Accept': 'application/json',
          },
        }
      );
      const details = yield responseDetails.json();
      detailedSuggestions.push(details);
    }

    return detailedSuggestions;
  }
}
