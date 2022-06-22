// 1. Launch browser++++++
// 2. Navigate to url 'http://automationexercise.com'++++
// 3. Verify that home page is visible successfully++++++
// 4. Click on 'Signup / Login' button++++
// 5. Verify 'New User Signup!' is visible+++++++
// 6. Enter name and email address++++++++
// 7. Click 'Signup' button+++++
// 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible++++++
// 9. Fill details: Title, Name, Email, Password, Date of birth++++++
// 10. Select checkbox 'Sign up for our newsletter!'+++++
// 11. Select checkbox 'Receive special offers from our partners!'+++++++
// 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
// 13. Click 'Create Account button'++++++++
// 14. Verify that 'ACCOUNT CREATED!' is visible+++++++
// 15. Click 'Continue' button++++++++++++++++++
// 16. Verify that 'Logged in as username' is visible
// 17. Click 'Delete Account' button
// 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button


describe("hafta 1 tekrar",()=>{
    it("hafta 1 tekrar",()=>{
        cy.visit("https://www.automationexercise.com/")
        cy.title().should("include","Exercise")
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('.signup-form > h2').should("have.text","New User Signup!")
        cy.get('[type="text"]').type("mali")
        cy.get('.signup-form > form > [type="email"]').type("fddil@gmail.com")
        cy.get('.signup-form > form > .btn').click()
        cy.get(':nth-child(1) > b').should("be.visible")
        cy.get('#id_gender1').click()
        cy.get('#password').type("2025")
        cy.get('#days').select("10")
        cy.get('#months').select("April")
        cy.get('#years').select("1990")
        cy.get('#newsletter').check()
        cy.get('#optin').check()
        cy.get('#first_name').type("maradona")
        cy.get('#last_name').type("carlos")
        cy.get('#company').type("nwc")
        cy.get('#address1').type("cikmaz sokak")
        cy.get('#address2').type("haydar mah")
        cy.get('#country').select("Canada")
        cy.get('#state').type("Han")
        cy.get('#city').type("bar")
        cy.get('#zipcode').type("502")
        cy.get('#mobile_number').type("45464747")
        cy.get('.login-form > form > .btn').click()
        cy.get('b').should("be.visible")
        cy.get('.pull-right > .btn').click()
        cy.get(':nth-child(9) > a').should("be.visible")
        cy.get('.shop-menu > .nav > :nth-child(5) > a').click()

    })
})