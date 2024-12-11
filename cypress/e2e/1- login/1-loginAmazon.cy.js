/// <reference types="cypress" />

describe('testes funcionais de login', () => {
    it('deve realizar o login com sucesso', () => {
        cy.visit('https://www.amazon.com.br/ref=nav_logo');
        
        // Aguarda o botão de login estar visível e clica
        cy.get('#nav-link-accountList-nav-line-1', { timeout: 15000 })
            .should('be.visible') // Garante que o botão é visível
            .click();
        
        // Insere o email e avança
        cy.get('#ap_email').type("jailsoncavalcante493@gmail.com");
        cy.get('.a-button-inner > #continue').click();
        
        // Insere a senha e realiza o login
        cy.get('#ap_password').type("alefalef2014");
        cy.get('#signInSubmit').click();

        // Aguarda até que o botão ou elemento esteja visível após o login
        cy.get('body').should('not.contain', 'Sign in') // Verifica se a tela de login desaparece
        cy.get('#nav-link-accountList', { timeout: 15000 })
            .should('be.visible') // Garante que o elemento está visível
            .and('contain', 'Olá, Alef'); // Verifica se o nome aparece após login
    });
});

