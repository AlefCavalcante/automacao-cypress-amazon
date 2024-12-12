/// <reference types="cypress" />


describe('teste 2E2 - realizar compra de produtos com sucesso', () => {
    it('fluxo da compra do produto', () => {
        // Acessa a página inicial da Amazon
        cy.visit('https://www.amazon.com.br/ref=nav_logo')

        cy.wait(5000); // Aguarda 5 segundos

        // Realizar o login
        cy.get('#nav-link-accountList-nav-line-1').click()
        cy.get('#ap_email').type("jailsoncavalcante493@gmail.com")
        cy.get('.a-button-inner > #continue').click()
        cy.get('#ap_password').type("alefalef2014")
        cy.get('#signInSubmit').click()

        cy.wait(3000); // Aguarda 3 segundos após o submit

        // Verificar se o login foi feito corretamente
        cy.get('#nav-link-accountList', { timeout: 10000 }).should('contain', 'Olá, Alef');

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