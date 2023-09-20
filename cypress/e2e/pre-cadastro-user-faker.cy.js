/// <reference types="cypress" />
var faker = require('faker');

describe('Teste de criação de usuário no site Ebac com Faker', () => {
    
    it('O pré cadastro deverá ser finalizado com sucesso', () => {
        cy.visit("http://lojaebac.ebaconline.art.br/#")
        cy.get('.icon-user-unfollow').click()

        // aqui o faker irá gerar os dados desejados de forma aleatória para que não seja necessário alterar manualmente pelo código
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('teste@teste!123')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.name.firstName())
        cy.get('#account_last_name').type(faker.name.lastName())
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should("be.visible", "Detalhes da conta modificados com sucesso.")
    });
});