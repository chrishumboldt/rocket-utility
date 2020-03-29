/**
 * @author Chris Humboldt
 */

import { RegEx } from '../../data/reg-ex.data';
import { SelectorType } from '../../data/selector.data';
import { RocketHas } from '../has/has.utility';
import { RocketRegExTest } from '../reg-ex/reg-ex.utility';

/**
 * Get the extension of a string.
 *
 * @param data - The data.
 */
function getExtension(data: string): string {
  let returnData = '';

  if (data) {
    const splitData = data.split('.');

    if (splitData) {
      returnData = splitData.pop()!.toLowerCase();
    }
  }

  return returnData;
}

/**
 * Get the index of a node within its parent.
 *
 * @param node - The node of the element list.
 */
function getIndex(node: any): number {
  // @ts-ignore
  return node ? [].indexOf.call(node.parentNode.children, node) : -1;
}

/**
 * Get the selector type based on a string version of the selector.
 *
 * @param selector - The selector of the DOM element.
 */
function getSelectorType(selector: string | undefined): SelectorType {
  if (!selector) {
    // The selector type is unknow.
    return SelectorType.UNKNOWN;
  } else if (selector === 'document') {
    return SelectorType.DOCUMENT;
  } else if (selector === 'window') {
    return SelectorType.WINDOW;
  } else if (
    selector.indexOf('.') > -1 ||
    RocketHas.spaces(selector) ||
    RocketRegExTest({ check: selector, regEx: RegEx.ATTRIBUTE })
  ) {
    // The selector is of type query selector all.
    return SelectorType.QUERY_SELECTOR_ALL;
  } else if (selector.indexOf('#') > -1) {
    // The selector is of type id.
    return SelectorType.GET_ELEMENT_BY_ID;
  } else if (RocketRegExTest({ check: selector, regEx: RegEx.TAG })) {
    // The selector is of type tag name.
    return SelectorType.GET_ELEMENT_BY_TAG;
  } else {
    // The selector type is quite simply unknown.
    return SelectorType.UNKNOWN;
  }
}

export const RocketGet = {
  extension: getExtension,
  index: getIndex,
  selectorType: getSelectorType
};
