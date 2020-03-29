/**
 * @author Chris Humboldt
 */

import { RegExTestOptions } from '../../type/reg-ex.type';

/**
 * Regular expression test.
 *
 * @param params.check - The string to check for.
 * @param params.regEx - The regular expression to check against.
 */
export function RocketRegExTest({ check, regEx }: RegExTestOptions): boolean {
  return regEx.test(check);
}
