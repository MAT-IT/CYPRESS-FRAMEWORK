describe("tekrar testi",()=>{
    it("1.gun tekrar",()=>{
        cy.visit("https://qa-environment.crystalkeyhotels.com/");
        cy.contains("Log in").click();
        cy.get('#UserName').type("Manager");
        cy.get('#Password').type("Manager2!");
        cy.get('#btnSubmit').click();

        //3 tur verification yaptik
        cy.url().should("include","UserAdmin");
        cy.get('.hidden-480').should("be.visible");
        cy.get('.page-breadcrumb > :nth-child(3) > a').should("have.text","ListOfUsers")

    })
    it("suggested",()=>{
        cy.visit("https://www.amazon.com/")
        cy
        .get('#twotabsearchtextbox')
        .type("books")
        .wait(3000)
        cy.get(':nth-child(9) > .s-suggestion-container > .s-suggestion')
        // cy.get("div[class='s-suggestion s-suggestion-ellipsis-direction'] span")
        // .contains("kids")
        .click()
    })
    it("drapdow",()=>{
        cy
        .visit("https://www.amazon.com/")
        .get("#searchDropdownBox")
        .select("Books", {force: true})
        

    })
    it("hover over",()=>{
        cy
        .visit("https://www.amazon.com/")
        .wait(2000)
        .get('.icp-nav-link-inner')
        .trigger("mouseover")
        .wait(5000)
        cy
        .contains("Change country/region.")
        .click()
        cy
        .get("#icp-dropdown")
        .select("Brazil (Brasil)",{force: true})


    })
    it("scroll into view",()=>{
        cy
        .visit("https://www.amazon.com/")        
        .get(':nth-child(3) > :nth-child(7) > .nav_a')
        .scrollIntoView()
        .wait(5000)
        cy.get('#nav-main > .nav-left')
        .scrollIntoView()
        cy.scrollTo(0, 500)       

    })
    it.only("checkhboxs",()=>{
        cy.visit("http://automationpractice.com/index.php")  
        cy.get("a.sf-with-ul")
        .first()
        .click()
        //cy.contains("Women")
        //.click()


        //1.method 
        //sadece bir checkbox tiklandi
        // cy.get('#layered_id_attribute_group_1')
        // .should("not.be.checked")
        // .wait(3000)
        // cy
        // .get('#layered_id_attribute_group_1')
        // .check()
        // .should("be.checked")

        //butun checkboxlar tiklandi ve unchecked yapildi
        // cy
        // .get("input.checkbox")
        // .check()
        // .should("be.checked")
        // .wait(2000)
        // cy
        // .get("input.checkbox")
        // .uncheck()
        // .should("not.be.checked")

        //2.method click kullanilarak yapiliyor

        //2.1. tek checbox tiklaniyor
        // cy
        // .get('#layered_id_attribute_group_1')
        // .click()
        // .should("be.checked")
        
        //2.2.multiple checkbox tiklaniyor
        // cy
        // .get("input.checkbox")
        // /*cy.click() can only be called on a single element. Your subject contained 19 elements. 
        // Pass { multiple: true } if you want to serially click each element.*/
        // .click({ multiple: true })//
        // .should("be.checked")


    })

}

)