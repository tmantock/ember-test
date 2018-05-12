/**
 * @fileoverview The Home route for the portfolio
 * Author: Tevin Mantock
 * Date:3/4/2018
 * Assignment: Project
 * Course: CS 290 Web Development
 */

import Route from '@ember/routing/route';

export default Route.extend({
  /**
   * setupController - Ember Route hook
   *
   * @param {Controller} controller
   * @param {Model} model
   */
  setupController(controller, model) {
    this._super(controller, model);
    // Set the images array for the controller
    controller.set('images', ['image_1', 'image_2']);
  },
});
