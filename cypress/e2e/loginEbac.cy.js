/// <reference types="cypress" />
var faker = require('faker');

describe('Teste de funcionalidade do Login da plataforma Ebac', () => {
    
    it('O login deverá ser finalizado com sucesso', () => {
        cy.visit("http://lojaebac.ebaconline.art.br/#")
        cy.get('.icon-user-unfollow').click()

        // aqui o faker irá gerar os dados desejados de forma aleatória para que não seja necessário alterar manualmente pelo código
        cy.get('#username').type('alda_wintheiser73')
        cy.get('#password').type('teste@teste!123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').should("be.visible", "Detalhes da conta")
    });

    it('Deve exibir uma mensagem de erro ao inserir um usuário inválido', () => {
        // Para tornar o processo de login mais seguro e eficiente, decidi primeiro criar uma conta com 
        cy.visit("http://lojaebac.ebaconline.art.br/#")
        cy.get('.icon-user-unfollow').click()

        // aqui o faker irá gerar os dados desejados de forma aleatória para que não seja necessário alterar manualmente pelo código
        cy.get('#username').type(faker.internet.email())
        cy.get('#password').type('teste@teste!123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should("be.visible", "Verifique novamente ou tente seu nome de usuário")
    });

    it('Deve exibir uma mensagem de erro ao inserir uma senha inválido', () => {
        // Para tornar o processo de login mais seguro e eficiente, decidi primeiro criar uma conta com 
        cy.visit("http://lojaebac.ebaconline.art.br/#")
        cy.get('.icon-user-unfollow').click()

        // aqui o faker irá gerar os dados desejados de forma aleatória para que não seja necessário alterar manualmente pelo código
        cy.get('#username').type('alda_wintheiser73')
        cy.get('#password').type(faker.internet.password())
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should("be.visible", "Erro: a senha informada para o usuário")
    });
});