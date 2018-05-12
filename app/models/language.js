/**
 * @fileoverview The Language Ember Data Model for the project app
 * Author: Tevin Mantock
 * Date:3/4/2018
 * Assignment: Project
 * Course: CS 290 Web Development
 */

import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

// Define a model for the languages that are used for a project
export default Model.extend({
  name: attr('string'),          // Languages have a name

  project: belongsTo('project'), // Languages belong to a project
});
