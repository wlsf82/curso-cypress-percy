// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import '@percy/cypress';

Cypress.Commands.add('fillMandatoryFields', () => {
  cy.get('#first-name').type('John');
  cy.get('#last-name').type('Doe');
  cy.get('#email').type('john@doe.com');
  cy.get('#agree').check();
});

Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
  cy.fillMandatoryFields();
  cy.contains('Confirm Tickets').click();
});
