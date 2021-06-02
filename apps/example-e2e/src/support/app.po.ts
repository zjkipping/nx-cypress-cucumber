import { getByTestId } from '@nx-cypress-cucumber/e2e-util';

export const getGreeting = () => getByTestId('welcome-message');
