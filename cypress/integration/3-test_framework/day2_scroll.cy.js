describe("Scroll Testing",()=>{
    /* ScrollIntoView() to scroll into the element
    1-Locate the element you want to scroll
    2-Use scrollIntoView() method   
    */
    it("Scroll Into View",()=>{
        cy.visit("https://qa-environment.crystalkeyhotels.com/")
        .wait(2000)

        //Scrolling down to "our rooms" element
        // cy
        // .get('.col-md-7 > .mb-4')
        // //.scrollIntoView()
        // .wait(2000)
        // cy
        // .get(':nth-child(9) > .container > .justify-content-center > .col-md-7 > h2')
        // .should("have.text","Recent Blog")
        // //.scrollIntoView()
        cy.get(':nth-child(1) > .blog-entry > .text > .heading > a')
        .click()//scroll yapmadan d sayfanin altlarindaki yerlere click yapilabiliyor.
    })
})