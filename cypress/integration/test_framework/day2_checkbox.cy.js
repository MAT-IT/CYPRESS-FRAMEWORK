describe("Checkboxes",()=>{
    
   it("checking single box",()=>{
    cy.visit("http://automationpractice.com/index.php")  
    
    cy
    .get("a.sf-with-ul")//returning 4 elements
    .first()//selecting on the first element
    .click()//clicking on the first one

    //verify the checkbox is not checked by default
    cy
    .get("#layered_category_4")
    .should('not.be.checked')//assert the element is not checked

    //checkbox is checked
    cy
    .get("#layered_category_4")
    .check()
    //check() and click() are some when we check single element
    //click() is not work multiply checkboes


    //verify the checkbox is checked
    cy
    .get("#layered_category_4")
    .should('be.checked')

    //UNCHECK the checkbox
    cy
    .get("#layered_category_4")//getting the element
    .uncheck()//unchecking the element
    .should('not.be.checked')//asserting the element

   })

   // it.only means run only this test case
   it.only('Check all checkboxes',()=>{
    cy.visit("http://automationpractice.com/index.php")  
    
    cy
    .get("a.sf-with-ul")//returning 4 elements
    .first()//selecting on the first element
    .click()//clicking on the first one

    //input[type='checkbox'] return all of the checkbox on the page
    cy
    .get("input[type='checkbox']")
    .check()
    cy.wait(2000)

    //uncheck all of the ckeckbox
    cy
    .get("input[type='checkbox']")
    .uncheck()

    //HOW DO YOU UNDERSTAND IF CHECKBOX IS CHECKED OR NOT
    //The change is the span element
    //When a check box is checked the parent span has value of 'checked'
    //ASSERT IF THE PARENT SPAN CLASS VALUE IS CHECKED
    cy
    .get("input[type='checkbox']")
    .first()//getting the first check box
    .click()
    .parent()//getting the parent element which is span
    .should('have.class','checked')//asserting if the span class='checked'

   })

   
})