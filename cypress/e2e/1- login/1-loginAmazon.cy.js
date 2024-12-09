/// <reference types="cypress" />


describe('testes funcional de login', () => {
    it('deve realizar o login com sucesso', () => {
        cy.visit('https://www.amazon.com.br/ref=nav_logo')
        cy.get('#nav-signin-tooltip > .nav-action-signin-button > .nav-action-inner').click()
        cy.get('#ap_email').type("jailsoncavalcante493@gmail.com")
        cy.get('.a-button-inner > #continue').click()
        cy.get('#ap_password').type("alefalef2014")
        cy.get('#signInSubmit').click()
        cy.get('#nav-link-accountList').should('contain','Olá, Alef')
    });
});