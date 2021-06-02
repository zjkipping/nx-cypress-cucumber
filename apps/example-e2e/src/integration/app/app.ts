import { Then } from 'cypress-cucumber-preprocessor/steps';

import { getGreeting } from '../../support/app.po';

Then('I should see the welcome greeting', () => {
  getGreeting().contains('Welcome to example!');
});
