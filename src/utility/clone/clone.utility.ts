/**
 * @author Chris Humboldt
 */

import { RocketConvert } from '../convert/convert.utility';
import { CloneOptions } from '../../type/clone.type';

/**
 * Clone the value that is data and return a new item without references
 * to the original value.
 *
 * @param params.applyClass - You can apply a class to the cloned object.
 * @param params.data - The data value that needs to be converted.
 */
export function RocketClone({ applyClass, data }: CloneOptions): any {
  const convertedJSON = RocketConvert.toJSON(JSON.stringify(data));
  return applyClass ? new applyClass(convertedJSON) : convertedJSON;
}
