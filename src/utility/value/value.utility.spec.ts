/**
 * @author Chris Humboldt
 */

import { RocketValue } from './value.utility';

describe('Rocket Value Utility:', () => {
  const testValue = 'Luke Skywalker';
  const fallback = 'Leia Organia';

  class Hero {
    name: string;
    type: string;

    constructor(data: any) {
      this.name = data.name;
      this.type = data.type;
    }
  }

  // Tests.
  it('Should apply a desired value.', () => {
    const hero = RocketValue({ data: testValue });

    expect(hero).toEqual(testValue);
  });

  it('Should apply a fallback value.', () => {
    const hero = RocketValue({ data: undefined, fallback: fallback });

    expect(hero).toEqual(fallback);
  });

  it('Should apply a class to the data value.', () => {
    const hero = RocketValue({
      data: {
        name: testValue,
        type: 'Jedi'
      },
      applyClass: Hero
    });

    expect(hero.name).toEqual(testValue);
    expect(hero.type).toEqual('Jedi');
    expect(hero instanceof Hero).toBeTruthy();
  });

  it('Should apply a class to a map of inputs.', () => {
    const heroes = RocketValue({
      data: {
        luke: {
          name: testValue,
          type: 'Jedi'
        },
        leia: {
          name: fallback,
          type: 'Princess'
        }
      },
      applyClass: Hero,
      applyClassToMap: true
    });

    expect(heroes.luke.name).toEqual(testValue);
    expect(heroes.leia.name).toEqual(fallback);
    expect(heroes.luke instanceof Hero).toBeTruthy();
    expect(heroes.leia instanceof Hero).toBeTruthy();
  });

  it('Should transform an data value bassed on a transform function.', () => {
    const hero = RocketValue({
      data: {
        name: testValue,
        type: 'Jedi'
      },
      transform: (theValue: any) => {
        theValue.name = fallback;
        return theValue;
      }
    });

    expect(hero.name).toEqual(fallback);
    expect(hero.type).toEqual('Jedi');
  });
});
