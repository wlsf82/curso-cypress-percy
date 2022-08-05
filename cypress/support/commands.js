

Cypress.Commands.add('fillMandatoryFields', () => {
    cy.get('#first-name').type('John');
    cy.get('#last-name').type('Doe');
    cy.get('#email').type('john@doe.com');
    cy.get('#agree').check();
  });
  
 