/**
 * @author Chris Humboldt
 */

import { RegEx } from '../../data/reg-ex.data';
import { RocketExists } from '../exists/exists.utility';
import { RocketRegExTest } from '../reg-ex/reg-ex.utility';

/**
 * Determine if the data is an array.
 *
 * @param check - The array to check.
 */
function isArray(check: any): boolean {
  return typeof check === 'object' && check instanceof Array;
}

/**
 * Determine if the data is a boolean.
 *
 * @param check - The boolean to check.
 */
function isBoolean(check: any): boolean {
  return typeof check === 'boolean';
}

/**
 * Determine if the current client is a browser.
 */
function isBrowser(): boolean {
  /*
   * A very basic check to detect if using a browser.
   * Lifted this directly from the Require.js check.
   * https://github.com/requirejs/requirejs/blob/master/require.js
   */
  return !!(
    typeof window !== 'undefined' &&
    typeof navigator !== 'undefined' &&
    window.document
  );
}

/**
 * Determine if something is a date.
 *
 * @param check - The date to check.
 */
function isDate(check: any): boolean {
  return typeof check === 'object' && check instanceof Date;
}

/**
 * Determine if the data is an element.
 *
 * @param check - The element to check.
 */
function isElement(check: any): boolean {
  return RocketExists(check) ? check.nodeType && check.nodeType === 1 : false;
}

/**
 * Determine if the data is an element array (HTMLCollection).
 *
 * @param check - The data to check.
 */
function isElementArray(check: any): boolean {
  return NodeList.prototype.isPrototypeOf(check);
}

/**
 * Determine if the data is in an email format.
 *
 * @param check - The email string to check.
 */
function isEmail(check: any): boolean {
  return RocketRegExTest({ check, regEx: RegEx.EMAIL });
}

/**
 * Determine if the data is a function.
 *
 * @param check - The function to check.
 */
function isFunction(check: any): boolean {
  return typeof check === 'function';
}

/**
 * Determine if a string is a hex colour string.
 *
 * @param check - The colour string to check.
 */
function isHexColour(check: any): boolean {
  return RocketRegExTest({ check, regEx: RegEx.COLOUR });
}

/**
 * Determine if the data is JSON.
 *
 * @param check - The JSON to check.
 */
function isJSON(check: any): boolean | undefined {
  if (isObject(check)) {
    return !isArray(check) && !isDate(check) && !isMap(check);
  } else {
    try {
      JSON.parse(check);
    } catch (error) {
      return false;
    }
  }
}

/**
 * Determine if the data is a map.
 *
 * @param check - The map to check.
 */
function isMap(check: any): boolean {
  return typeof check === 'object' && check instanceof Map;
}

/**
 * Determine if the data is a number.
 *
 * @param check - The number to check.
 */
function isNumber(check: any): boolean {
  return typeof check === 'number' && Number.isInteger(check);
}

/**
 * Determine if the data is an object.
 *
 * @param check - The object to check.
 */
function isObject(check: any): boolean {
  return typeof check === 'object';
}

/**
 * Determine if the data is in a password format.
 *
 * @param check - The password string to check.
 */
function isPassword(check: any): boolean {
  return RocketRegExTest({ check, regEx: RegEx.PASSWORD });
}

/**
 * Determine if the data is a string.
 *
 * @param check - The string to check.
 */
function isString(check: any) {
  return typeof check === 'string';
}

/**
 * Determine if the data is in a time format.
 *
 * @param check - The time string to check.
 */
function isTime(check: any): boolean {
  return RocketRegExTest({ check, regEx: RegEx.TIME });
}

/**
 * Determine if the client is touch enabled.
 */
function isTouch() {
  if (!isBrowser() || !window || !window.console) {
    return false;
  } else {
    return 'ontouchstart' in window || 'onmsgesturechange' in window;
  }
}

/**
 * Determine if the data is in a url format.
 *
 * @param check - The url string to check.
 */
function isURL(check: any): boolean {
  return RocketRegExTest({ check, regEx: RegEx.URL });
}

export const RocketIs = {
  array: isArray,
  boolean: isBoolean,
  browser: isBrowser,
  date: isDate,
  element: isElement,
  elementArray: isElementArray,
  email: isEmail,
  function: isFunction,
  hexColor: isHexColour,
  hexColour: isHexColour,
  json: isJSON,
  map: isMap,
  number: isNumber,
  object: isObject,
  password: isPassword,
  string: isString,
  time: isTime,
  touch: isTouch,
  url: isURL
};
