describe("suggested element",()=>{
    it("suggested element",()=>{
        cy.visit("https://www.google.com/")
        cy.get('#L2AGLb > .QS5gu').click()
        cy.get("input[name='q']").type("usa")
        cy.wait(3000)
        cy.get("li span b")//getting the list of bold items
        .contains("map")//choosing the one that contains map
        .click();//then clicking on it        

    })
    it("automation practice",()=>{
        cy.visit("http://automationpractice.com/index.php")
        cy.get('#search_query_top').type("dress")
        cy.wait(5000)
        //method 1 is locate the one of thr suggestion option 
        //and click on it
        // cy
        // .get('.ac_results > ul > :nth-child(1)')
        // .click()

        

        //method 2 is to use contains
        //and click on it
         cy
        .get(".ac_results")//whole suggestion will be come
        .contains("Summer")//click on the first element if there are multiplily choise
        .click()

        //Assertion

        cy
        .get('h1')
        .should("be.visible")
    })
    it.only("suggestion tekrar",()=>{
        cy.visit('https://www.amazon.com/')
        .wait(2000)
        cy.get('#twotabsearchtextbox')
        .wait(2000)
        .type("pen")
        cy
        .get("div span.s-heavy")
        .contains("cil case")
        .click()

    })

})