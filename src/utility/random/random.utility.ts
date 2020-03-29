/**
 * @author Chris Humboldt
 */

import {
  RandomIntegerOptions,
  RandomStringOptions
} from '../../type/random.type';
import { Characters } from '../../data/character.data';

/**
 * Generate a random integer.
 *
 * @param params.max - The max length of the returned string.
 * @param params.min - The min length of the returned string.
 */
function randomInteger({ max = 10, min = 1 }: RandomIntegerOptions): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Generate a random string.
 *
 * @param params.length - The desired string length.
 * @param params.textOnly - Flag to make text only.
 */
function randomString({
  length = 5,
  textOnly = false
}: RandomStringOptions): string {
  const characters = textOnly
    ? Characters.ALPHABET
    : `${Characters.ALPHABET}${Characters.NUMBERS}`;
  let returnString = '';

  /*
   * Append to the return string a character randomly selected from the
   * character list.
   */
  for (let i = 0; i < length; i++) {
    returnString += characters[randomInteger({ max: characters.length - 1 })];
  }

  return returnString;
}

export const RocketRandom = {
  integer: randomInteger,
  string: randomString
};
