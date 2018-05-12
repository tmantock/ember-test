/**
 * @fileoverview The formatBody template hbs helper for templates
 * Author: Tevin Mantock
 * Date:3/4/2018
 * Assignment: Project
 * Course: CS 290 Web Development
 */

import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';

/**
 * formatBody - Joins an array of strings into a single string separated by a space.
 *              The function also replaces any new line characters with HTML breaks.
 *
 * @export
 * @param {Array} [str] - An array of strings
 * @returns {String}
 */
export function formatBody([str]) {
  return htmlSafe(str.join(' ').replace('\n', '<br> <br>'));
}

export default helper(formatBody);
