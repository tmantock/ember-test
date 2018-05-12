/**
 * @fileoverview The Project Ember Data Model for the project app
 * Author: Tevin Mantock
 * Date:3/4/2018
 * Assignment: Project
 * Course: CS 290 Web Development
 */

import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

// Define a model for Projects
export default Model.extend({
    title:     attr('string'),  // Projects have titles
    subHeader: attr('string'),  // Projects have subHeaders
    body:      attr('string'),  // Projects have body content
    completed: attr('boolean'), // Projects have a completed flag

    languages: hasMany('language'), // Projects have many languages
});
