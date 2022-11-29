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
// -- Aqui criamos uma função para melhorar a qualidade do código e não deixar tão visível o nome de usuário e senha nos códigos princiáos
Cypress.Commands.add("login", (usuario, senha) => {
  // ps: o login e senha não são aleatórios, eles foram fornecidos pelo professor da aula :)
  cy.get("#username").type(usuario)
  cy.get("#password").type(senha)
  cy.get(".woocommerce-form > .button").click()
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
