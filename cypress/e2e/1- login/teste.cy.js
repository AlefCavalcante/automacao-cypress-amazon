/// <reference types="cypress" />

describe('Teste E2E - Realizar compra de produtos com sucesso', () => {
    it('Fluxo de compra do produto', () => {
        // Acessa a página inicial da Amazon
        cy.visit('https://www.amazon.com.br/ref=nav_logo');

        // Realiza o login
        cy.get('#nav-signin-tooltip > .nav-action-signin-button > .nav-action-inner').click();
        cy.get('#ap_email').type('jailsoncavalcante493@gmail.com');
        cy.get('.a-button-inner > #continue').click();
        cy.get('#ap_password').type('alefalef2014');
        cy.get('#signInSubmit').click();
        cy.get('#nav-link-accountList')
          .should('contain', 'Olá, Alef')
          .then(() => cy.log('Login realizado com sucesso!'));

        // Busca por "notebook" na barra de pesquisa
        cy.get('#twotabsearchtextbox').type('notebook{enter}');

        // Aguarda os resultados carregarem
        cy.get('.s-main-slot').should('be.visible');

        // Seleciona o primeiro produto da lista
        cy.get('.s-main-slot .s-result-item')
          .first()
          .find('h2 a')
          .click();

        // Adiciona o produto ao carrinho
        cy.get('#add-to-cart-button')
          .should('be.visible')
          .click()
          .then(() => cy.log('Produto adicionado ao carrinho.'));

        // Vai para o carrinho
        cy.get('#nav-cart-count-container').click();

        // Verifica se está na página do carrinho
        cy.get('.a-size-extra-large')
          .should('contain', 'Carrinho de compras')
          .then(() => cy.log('Página do carrinho acessada com sucesso.'));

        // Verifica que o item foi adicionado ao carrinho
        cy.get('.a-span2 > .a-color-secondary')
          .should('contain', 'Preço')
          .then(() => cy.log('Item encontrado no carrinho.'));
    });
});
