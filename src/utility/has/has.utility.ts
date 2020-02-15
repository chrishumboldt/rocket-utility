/**
 * @author Chris Humboldt
 */

import { Extension } from '../../data/extension.data';
import { RocketIs } from '../is/is.utility';
import { HasClassOptions, HasExtensionOptions } from '../../type/has.type';

/**
 * Check if an element has a class name.
 *
 * @param options - The deconstructed options object.
 * @param options.check - The element to check for.
 * @param options.has - The class names to check against.
 */
function hasClass({ check, has }: HasClassOptions): boolean {
  return (' ' + check.className + ' ').indexOf(' ' + has + ' ') > -1;
}

/**
 * Check to see if a string fulfils the allowed extensions check.
 *
 * @param options - The deconstructed options object.
 * @param options.allowedTypes - The allowed types to check against.
 * @param options.check - The string to check for.
 */
function hasExtension({
  allowedTypes,
  check
}: HasExtensionOptions): boolean {
  /*
  * Make sure the allowed types is an array. This caters for user defined
  * lists. If not fail the check.
  */
  if (!allowedTypes || !RocketIs.array(allowedTypes) || !check) {
    return false;
  } else {
      const checkSplit = check.split('.');
      const checkPop: any = (checkSplit && checkSplit.length > 1) ? checkSplit.pop() : false;

      if (checkPop) {
        return (allowedTypes.indexOf(checkPop.toLowerCase()) > -1);
      } else {
        return false;
      }
  }
}

/**
 * Check to see if a string has any spaces.
 *
 * @param check - The string to test against.
 */
function hasSpaces(check: string): boolean {
  return /\s/.test(check);
}

export const RocketHas = {
  class: hasClass,
  spaces: hasSpaces,
  extension: hasExtension
};
