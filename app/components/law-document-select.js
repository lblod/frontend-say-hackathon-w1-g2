import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import fetch from 'fetch';
import { restartableTask, timeout } from 'ember-concurrency';

export default class LawDocumentComponent extends Component {
  @service store;

  @restartableTask
  *search(searchData) {
    yield timeout(400);
    const response = yield fetch(
      `https://codex.opendata.api.vlaanderen.be/api/WetgevingDocument/Zoeken?zoekTerm=${searchData}`
    );
    const jsonResponse = yield response.json();
    const suggestions = jsonResponse.ResultatenLijst;

    return suggestions.ResultatenLijst;
  }
}
