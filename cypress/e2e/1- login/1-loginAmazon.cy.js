/// <reference types="cypress" />

describe('testes funcionais de login', () => {
    it('deve realizar o login com sucesso', () => {
        cy.visit('https://www.amazon.com.br/ref=nav_logo');
        
        // Aguarda o botão de login estar visível e clica
        cy.get('#nav-signin-tooltip > .nav-action-signin-button > .nav-action-inner', { timeout: 10000 }).should('be.visible').click();
        
        // Insere o email e avança
        cy.get('#ap_email').type("jailsoncavalcante493@gmail.com");
        cy.get('.a-button-inner > #continue').click();
        
        // Insere a senha e realiza o login
        cy.get('#ap_password').type("alefalef2014");
        cy.get('#signInSubmit').click();
        
        // Aguarda o texto de saudação aparecer
        cy.get('#nav-link-accountList', { timeout: 10000 }).should('contain', 'Olá, Alef');
    });
});
