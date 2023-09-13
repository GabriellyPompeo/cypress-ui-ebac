/// <reference types="cypress" />
// var faker = require("faker");

describe("Testando a funcionalidade da página de produtos", () => {
  beforeEach(() => {
    cy.visit("http://lojaebac.ebaconline.art.br/produtos/");
  });

  // aqui encontramos uma classe comum a todos os produtos da lista do site, pois se pegarmos algum em específico, não seria uma boa prática por conta de que ele pode deixar de estar disponível(o que quebraria nosso código)
  it("Deve selecionar um produto da lista", () => {
    // para pegar o primeiro item da lista, use .first()
    //  cy.get('[class="product-block grid"]').first().click()

    // para pegar o último item da lista, use .last()
    //  cy.get('[class="product-block grid"]').first().click()

    // Para pegar outro valor que não seja nem o primeiro nem o último, use .eq()
    // OBS: o .eq() funciona como um array, ou seja: a contagem inicia a partir do 0
    cy.get('[class="product-block grid"]').eq(3).click();
  });
});
