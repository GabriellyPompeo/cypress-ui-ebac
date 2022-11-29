/// <reference types="cypress" />

describe("Teste automatizado de login E2E na Loja Ebac", () => {
  it("Deverá ser feito o login com sucesso", () => {
    cy.visit("http://lojaebac.ebaconline.art.br/#");
    cy.get(".icon-user-unfollow").click();

    // Login no site chamando a função criada no arquivo commands.js
    cy.login("aluno_ebac@teste.com", "teste@teste.com");
    // aqui faremos uma validação para ver se o teste deu certo ou não, já que o texto "Minha Conta" só aparece para usuários que conseguiram finalizar o login
    cy.get(".page-title").should("be.visible", "Minha Conta");

    //fazer logout do site
    cy.get(".woocommerce-MyAccount-content > :nth-child(2) > a").click();
  });

  it("Deverá exibir mensagem de erro por user inválido", () => {
    cy.login("aluno_eba@teste.com", "teste@teste.com");
    // aqui faremos uma validação de se a mensagem de erro por user inválido aparece ou não, buscando pelo texto "Endereço de e-mail desconhecido"
    cy.get(".woocommerce-error > li").should(
      "be.visible",
      "Endereço de e-mail desconhecido"
    );
  });

  it("Deverá exibir mensagem de erro por senha incorreta", () => {
    // aqui adicionei novamente o link do login para que a página atualizasse e perdesse os dados usados para o teste anterior
    cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/");
    cy.login("aluno_ebac@teste.com", "123456");
    // aqui faremos uma validação de se a mensagem de erro por senha incorreta aparece ou não, buscando pelo texto "a senha fornecida para o e-mail tal está incorreta"
    cy.get(".woocommerce-error > li").should(
      "be.visible",
      "a senha fornecida para o e-mail"
    );
  });
});
