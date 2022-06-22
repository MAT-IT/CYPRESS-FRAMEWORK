describe("drop Down",()=>{
    it("drop down test",()=>{
        cy.visit("https://the-internet.herokuapp.com/dropdown");

        //cypress uses select method to select from a dropdown
        //1.locate the dropdown element
        //2.use select method to select the option
   
        //select option 1
        cy
        .get('#dropdown')
        .select("Option 1")
        .should("have.value",1);
        cy.wait(2000)

        //select option 2
        cy
        .get('#dropdown')
        .select("Option 2")
        .should("have.value",2);

    })

    it("drop down-select elementi test ebay",()=>{
        cy.visit("https://www.ebay.co.uk/");
        cy.get('#gh-cat').select("Art");
      
    })
    it.only("drapdown tekrar",()=>{
        cy.visit('https://automationpractice.com/index.php')
        cy.get('.sf-menu > :nth-child(1) > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]')
        .click()
        cy.get('#selectProductSort')
        .select("In stock")
        


    })
   
})