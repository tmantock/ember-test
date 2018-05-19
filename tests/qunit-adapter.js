import { QUnitAdapter } from 'ember-qunit';
import Ember from 'ember';

let useEmberOnError = false;
export default QUnitAdapter.extend({
  exception(error) {
    if (useEmberOnError) {
      Ember.onerror(error);
      return;
    }

    this._super(...arguments);
  }
});
