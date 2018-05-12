/**
 * @fileoverview The Project Carousel component that is used for implementing
 * an image carousel
 * Author: Tevin Mantock
 * Date:3/4/2018
 * Assignment: Project
 * Course: CS 290 Web Development
 */

import Component from '@ember/component';
import { later, cancel } from '@ember/runloop';

export default Component.extend({
  tagName:    'div',
  classNames: ['project-carousel'],

  images:   null,
  carousel: null,

  /**
   * didInsertElement - Ember Component Lifecycle hook that is ran after the element
   *                    has been inserted into the DOM
   */
  didInsertElement() {
    this._super(arguments);
    this.moveCarousel();
  },

  /**
   * willDestroyElement - Ember Component Lifecycle hook that is ran before the component
   *                      is destroyed
   */
  wilDestroyElement() {
    this._super(arguments);
    if (this.get('carousel')) {
      cancel(this.get('carousel'));
    }
  },


  /**
   * moveCarousel - Method makes the carousel animate through the list of images
   *
   * @param {void}
   * @return {void}
   */
  moveCarousel() {
    var delayMs = 5000;
    var images = this.get('images');
    // Set carousel to be an event that will ran later (delayMs)
    // This event will animate the images-containers left position.
    this.set('carousel', later(this, () => {
      // Make sure the component is in the DOM (the event is ran after a page change)
      if (this.get('isDestroyed') || this.get('isDestroying')) {
        return;
      }
      // Get the with of the frame for the image. (pixels to move by)
      var width = this.$().width();
      // Get the total size of the container
      var totalWidth = width * images.get('length');
      // Get the current left position for the container
      var currentLeft = this.$('.carousel-container').position().left;
      // Set teh left value that will passed to the jQuery animate function
      var left = '-=' + width;
      // If we are at the last image, og back to the first image
      if (totalWidth - Math.abs(currentLeft) <= width) {
        left = '+=' + Math.abs(currentLeft);
      }
      // Call the jQuery animate function
      this.$('.carousel-container').animate({
        left: left,
      });
      // Call the moveCarousel function again, so it can animate the image again
      this.moveCarousel();
    }, delayMs));
  }
});
