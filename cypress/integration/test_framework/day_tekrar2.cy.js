describe('checkbox verify with parent ',()=>{
    it('verify with parent',()=>{
        cy.visit('https://www.amazon.com/')
        .wait(3000)
        cy
        .get('#twotabsearchtextbox')
        .type('lenovo')
        .wait(3000)
        cy
        .get('#nav-search-submit-button')
        .click()
        .wait(3000)
        cy.get("input[type='checkbox']")
        .first()
        .check({force: true})
        
        //amazonunun sitesinde parent da fail etti!!!!
        cy.get("input[type='checkbox']")
        .first()
        .parent()
        .should('have.class','a-checkbox a-checkbox-fancy s-navigation-checkbox aok-float-left')

    })
    
})