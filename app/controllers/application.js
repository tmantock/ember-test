/**
 * @fileoverview The Controller for the Application route (Base Controller)
 * Author: Tevin Mantock
 * Date:3/4/2018
 * Assignment: Project
 * Course: CS 290 Web Development
 */

import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    // Computed property that observes the value of the controller's currentPath
    // attribute. This needs to a computed property, so any changes that occur to the
    // currentPath attribute is displayed on the DOM, since its observing properties
    // means that it will update the template when there is a relevant change
    currentRoute: computed('currentPath', function() {
        return this.get('currentPath');
    }),
});
