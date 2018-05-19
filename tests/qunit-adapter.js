import { QUnitAdapter } from 'ember-qunit';

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
