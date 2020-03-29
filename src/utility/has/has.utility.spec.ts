/**
 * @author Chris Humboldt
 */

import { RocketHas } from './has.utility';

describe('Rocket Has Utility:', () => {
  // Tests.
  it('Should have a valid extension.', () => {
    const checkString = 'filename.pdf';

    expect(
      RocketHas.extension({ check: checkString, allowedTypes: ['pdf'] })
    ).toBeTruthy();
  });

  it('Should successfully test the spaces in a string.', () => {
    expect(RocketHas.spaces('This has spaces!')).toBeTruthy();
    expect(RocketHas.spaces('ThisDoesNotHaveSpaces!')).toBeFalsy();
  });
});
