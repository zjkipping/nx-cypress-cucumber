export function getByTestId<T = HTMLElement>(
  id: string,
  timeout?: number
): Cypress.Chainable<JQuery<T>> {
  return cy.get(`[data-e2e=${id}]`, { timeout }) as any;
}
