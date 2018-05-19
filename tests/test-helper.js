import Application from '../app';
import config from '../config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';
import QUnitAdapter from './qunit-adapter';
import Ember from 'ember';

setApplication(Application.create(config.APP));

start({setupTestAdapter: false});

Ember.Test.adapter = QUnitAdapter.create();
