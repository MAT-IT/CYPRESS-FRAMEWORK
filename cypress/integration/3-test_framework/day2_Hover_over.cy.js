describe("move over",()=>{
    it("move over",()=>{
        cy.visit('https://www.amazon.com/')

        //cypress uses the trigger function to do mouse action
        //to move over to an element we use trigger('mouseover')
        cy
        .get('.icp-nav-link-inner')//getting the element
        .trigger('mouseover')//moving the mouse over

        //click on change / country region
        cy
        .get('#nav-flyout-icp > .nav-template > #icp-flyout-mkt-change > .nav-text > .icp-mkt-change-lnk')
        .click()

        //select canada from dropdown
        cy
        .get('#icp-dropdown')
        .select('Canada',{force:true})
        
    })
}

)