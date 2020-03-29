/**
 * @author Chris Humboldt
 */

import { RocketExists } from './exists.utility';

describe('Rocket Exists Utility:', () => {
  // Tests.
  it('Should successfully test for the existence of a value.', () => {
    const nothing: undefined = undefined;
    const nonExistent: null = null;
    const trueMe = true;
    const someValue = 'yay';

    expect(RocketExists(trueMe)).toBeTruthy();
    expect(RocketExists(someValue)).toBeTruthy();
    expect(RocketExists(nothing)).toBeFalsy();
    expect(RocketExists(nonExistent)).toBeFalsy();
    expect(RocketExists(false)).toBeFalsy();
  });
});
