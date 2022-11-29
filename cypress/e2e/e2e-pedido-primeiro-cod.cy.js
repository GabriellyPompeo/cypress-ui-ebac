/// <reference types="cypress" />

describe('Primeiro teste automatizado da Gaby, Teste E2E no Saucelabs', () => {
    // describe serve para descrever o que será feito no teste
    
it('Deverá ser feito o fluxo E2E do Saucelabs ', () => {
    // o comando it serve como um cenário de teste, onde falamos o que será feito
    cy.visit('https://www.saucedemo.com/')

    // aqui estamos pegando o campo "username" com ajuda do seletor do próprio cypress
    // o comando .type é onde colocamos o que desejamos que seja escrito no campo em questão 
    cy.get('[data-test="username"]').type('standard_user')

    //aqui estamos pegando o campo "password" com ajuda do seletor do próprio cypress
    cy.get('[data-test="password"]').type('secret_sauce')

    //aqui estamos botão de login com ajuda do seletor do próprio cypress para poder fazer o login
    cy.get('[data-test="login-button"]').click()

    //aqui filtramos o select para mostrar os produtos em ordem alfabética
    cy.get('[data-test="product_sort_container"]').select('Name (Z to A)')

    // add produto no carrinho
    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()

    // entramos no carrinho
    cy.get('.shopping_cart_link').click()

    //indo para o checkout
    cy.get('[data-test="checkout"]').click()

    // escrevendo dados no checkout
    cy.get('[data-test="firstName"]').type('Standart')
    cy.get('[data-test="lastName"]').type('User')
    cy.get('[data-test="postalCode"]').type('93110351')

    // avançando no checkout
    cy.get('[data-test="continue"]').click()

    // finalizando compra
    cy.get('[data-test="finish"]').click()

    // voltando para o menu
    cy.get('[data-test="back-to-products"]').click()
});
});
