describe(
    "cristal key hotel",()=>{
        it (
            "title test", ()=>{
                cy.visit("https://qa-environment.crystalkeyhotels.com/");
                cy.url().should("includes","hotels");
                cy.get('#navLogon > .nav-link').click();
                cy.get('.row > .mb-4').should("be.visible");
                cy.get('#UserName').type("Manager");
                cy.get('#Password').type("Manager2!");
                cy.get('#btnSubmit').click();
                cy.get('.caption-subject').should("have.text","ListOfUsers");
                cy.visit("https://www.amazon.com")        

            }
        )
        
              
        
    }
)