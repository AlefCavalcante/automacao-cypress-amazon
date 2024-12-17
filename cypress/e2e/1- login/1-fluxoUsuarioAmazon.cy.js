/// <reference types="cypress" />

describe('Teste E2E - Fluxo de Login e Compra na Amazon', () => {

    // Caso de Teste 1: Realizar login na Amazon
    it('Deve realizar o login com sucesso', () => {
      // Acessa a página inicial da Amazon
      cy.visit('https://www.amazon.com.br/');
  
      // Realizar o login
      cy.get('#nav-link-accountList-nav-line-1').click();
      cy.get('#ap_email').type("analistateste7@gmail.com");
      cy.get('.a-button-inner > #continue').click();
      cy.get('#ap_password').type("alefalef2014");
      cy.get('#signInSubmit').click();
  
      // Verificar se o login foi feito corretamente
      cy.get('#nav-link-accountList-nav-line-1').should('contain', 'Olá, Teste');
    });
  
    // Caso de Teste 2: Realizar compra de um produto
    it('Deve realizar a compra de um produto com sucesso', () => {
      // Acessa a página inicial da Amazon
      cy.visit('https://www.amazon.com.br/');

      // Realizar o login
      cy.get('#nav-link-accountList-nav-line-1').click();
      cy.get('#ap_email').type("analistateste7@gmail.com");
      cy.get('.a-button-inner > #continue').click();
      cy.get('#ap_password').type("alefalef2014");
      cy.get('#signInSubmit').click();
  
       // Verificar se o login foi feito corretamente
       cy.get('#nav-link-accountList').should('contain', 'Olá, Teste');

       // Busca por "notebook" na barra de pesquisa
      cy.get('#twotabsearchtextbox').type('notebook{enter}');

      // Aguarda os resultados carregarem
      cy.get('.s-main-slot').should('be.visible');

      // Adiciona o primeiro produto ao carrinho
      cy.get('#a-autoid-1-announce').click();

      // Ir para o carinho
      cy.get('#nav-cart-count-container').click();

      // Verifique se está na pagina carinho
      cy.get('.a-size-extra-large').should('contain','Carrinho de compras');

      // Verifica que o item foi adicionado ao carrinho
      cy.get('.a-span2 > .a-color-secondary').should('contain','Preço');
    });
  
  });
  