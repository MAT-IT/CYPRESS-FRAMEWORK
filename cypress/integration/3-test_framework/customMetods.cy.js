describe(" custom metod",()=>{
    it("login",()=>{
        cy.login1()
        cy.login("Manager","Manager2!")

    })

    it("searchProduct",()=>{
        cy.searchProduct("teapot")
        //assert with title
        //cy.title().should("include","teapot")
        //assert with text
        cy.get("div span[class='a-color-state a-text-bold']").should("have.text",'"teapot"')
               

    })
    it.only("filterLowToHigh",()=>{
        cy.filterLowToHigh("tea")
               

    })
})