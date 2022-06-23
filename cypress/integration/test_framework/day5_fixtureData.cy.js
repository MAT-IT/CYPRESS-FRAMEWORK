describe("Paylinn",()=>{

    before(function(){
        //this is used to acsess the data that is inside creds.json
        // cy.fixture("NAME OF THE FILE")
        // promise.then
        cy.fixture("creds").then(
            function(data){
                this.data=data
            }
        )

              
   })

   beforeEach("url paylinn",function(){
    cy.visit(this.data.url)


   })
    it.skip("paylinn login test",function(){
        
        cy.contains("Sign In").click()

        //enterin user name
        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .type("User")

        //entering password 
        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .type("user")


        cy.get('.MuiButtonBase-root').click()

        //verify
        cy.get('.header__nav > .header__link > .header__option > :nth-child(2)')
        .should("have.text","Logout")

    })

    it("used fixture to  login paylinn",function(){
        
        cy.contains("Sign In").click()

        //enterin user name and verify value
        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .type(this.data.username)
        .should("have.attr","value",this.data.username)

        //entering password and verify value
        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .type(this.data.password)
        .should("have.attr","value",this.data.password)


        cy.get('.MuiButtonBase-root').click()

        //multiply verifications
        cy.get('.header__nav')
        .should("contain.text","Logout")
        .and("contain.text","React User")
        .and("contain.text","Welcome")

    })
    
})