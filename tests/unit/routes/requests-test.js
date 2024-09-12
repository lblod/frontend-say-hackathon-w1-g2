import { module, test } from 'qunit';
import { setupTest } from 'frontend-say-hackathon-w1-g2/tests/helpers';

module('Unit | Route | requests', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:requests');
    assert.ok(route);
  });
});
