import {
  module,
  test
} from 'qunit';
import {
  visit,
  currentURL
} from '@ember/test-helpers';
import {
  setupApplicationTest
} from 'ember-qunit';
import {
  capture
} from 'project/tests/helpers/capture';

module('Acceptance | application', function (hooks) {
  setupApplicationTest(hooks);

  // test('visiting home', async function (assert) {
  //   await visit('/home');
  //   capture('visiting home page');
  //   assert.equal(currentURL(), '/home');
  // });

  test('visiting projects', async assert => {
    await visit('/projects')
    capture('visiting projects page');
    assert.equal(currentURL(), '/projects');
  });

  test('visiting resume', async assert => {
    await visit('/resume')
    capture('visiting resume page');
    assert.equal(currentURL(), '/resume');
  });
});
