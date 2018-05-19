import Application from '../app';
import config from '../config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';
import Ember from 'ember';

setApplication(Application.create(config.APP));

start({setupTestAdapter: false});

Ember.onerror = function (error) {
  if (Ember.testing) {
    throw error
  }
}
