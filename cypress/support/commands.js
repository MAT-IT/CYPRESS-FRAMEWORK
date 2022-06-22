import '@4tw/cypress-drag-drop'
import 'cypress-iframe';
import 'cypress-file-upload'

Cypress.Commands.add('login', (username, password) => { 
    cy.visit("https://qa-environment.crystalkeyhotels.com/");                
    cy.get('#navLogon > .nav-link').click();    
    cy.get('#UserName').type(username);
    cy.get('#Password').type(password);
    cy.get('#btnSubmit').click()
})
Cypress.Commands.add('login1', () => { 
    cy.visit("https://qa-environment.crystalkeyhotels.com/");                
    cy.get('#navLogon > .nav-link').click();                
    cy.get('#UserName').type("Manager");
    cy.get('#Password').type("Manager2!");
    cy.get('#btnSubmit').click()
})
Cypress.Commands.add("searchProduct",(productName)=>{
    cy.visit('https://www.amazon.com/')
    .wait(3000)
    cy.get('#twotabsearchtextbox').click().wait(3000).type(productName)
    .wait(2000)
    cy.get('#nav-search-submit-button').click()
    .wait(2000)    
    //cy.screenshot()
})

Cypress.Commands.add("filterLowToHigh",(productName)=>{
    cy.searchProduct(productName)//yukarda olusturulan reusable fonk burdaki metodumuzun icinde kullanabiliriz
    cy.get("#s-result-sort-select").select("Price: Low to High",{force: true})

})
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
