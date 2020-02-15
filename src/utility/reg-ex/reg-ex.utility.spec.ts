/**
 * @author Chris Humboldt
 */

import { RocketRegExTest } from './reg-ex.utility';
import { RegEx } from '../../data/reg-ex.data';

describe('Rocket Regular Expression Utility:', () => {
   // Tests.
   it('Should successfully test an email regular expression.', () => {
      const functionTest = RocketRegExTest({
         check: 'rocket@rocket.com',
         regEx: RegEx.EMAIL
      });

      expect(functionTest).toBeTruthy();
   });

   it('Should fail the test of an email regular expression.', () => {
      const functionTest = RocketRegExTest({
         check: 'rocketnoemail',
         regEx: RegEx.EMAIL
      });

      expect(functionTest).toBeFalsy();
   });
});
