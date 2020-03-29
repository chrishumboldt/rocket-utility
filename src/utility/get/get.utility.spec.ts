/**
 * @author Chris Humboldt
 */

import { SelectorType } from '../../data/selector.data';
import { RocketGet } from './get.utility';

describe('Rocket Get Utility:', () => {
  // Tests.
  it('Should get the extension from a string.', () => {
    expect(RocketGet.extension('filename.jpg')).toEqual('jpg');
  });

  it('Should get the selector type based on the data.', () => {
    expect(RocketGet.selectorType('.className')).toEqual(
      SelectorType.QUERY_SELECTOR_ALL
    );
    expect(RocketGet.selectorType('#idReference')).toEqual(
      SelectorType.GET_ELEMENT_BY_ID
    );
    expect(RocketGet.selectorType('textarea')).toEqual(
      SelectorType.GET_ELEMENT_BY_TAG
    );
    expect(RocketGet.selectorType('')).toEqual(SelectorType.UNKNOWN);
    expect(RocketGet.selectorType(undefined)).toEqual(SelectorType.UNKNOWN);
  });
});
