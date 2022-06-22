describe('Alert test',()=>{
    it('Alert test',()=>{
        /* 
        Cypress automatically accepts alert when you click on alert button
        */
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy
        .get(':nth-child(1) > button')//clicking on the alert button
        .click()//this automaticaliy accepts the alerts

        //assert the test is matching:You successfully clicked an alert
        cy
        .get('#result')//getting the result element
        .should('have.text','You successfully clicked an alert')//asserting the result text
    })

    it("Dismiss alert Test",()=>{
        /* 
        Cypress automatically accepts alert when you click on alert button
        with cypress we can control the browser events using on func
        on is a jquery func.
        */
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy
        .get(':nth-child(2) > button')
        .click()

        //window(object):confirm (functionalty)
         cy.on('window:confirm',(str)=>{
             return false//DEFAULT CYPRESS BEHAVIOUR return true
        })

        //asserting the result now has you clicked:Cansel
        cy
        .get('#result')
        .should('have.text','You clicked: Cancel')

    })
    it("entering text on promt alert",()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        /* 
        Cypress automatically accepts alert when you click on alert button
       we will use window() func  on is a jquery func.
        */

       //controll the prompt
       //type ok
       //click ok
       //assert
        cy.
        window().//to control the pop up window
        then(($windowElement)=>{ //represent the window pop up element,
            cy
            .stub($windowElement,'prompt')
            .returns('Ok') //entering Ok in the prompt
            cy.wait(3000)
            cy.get(':nth-child(3) > button').click();
        })

        //asserting the result now has you You entered: Hi
        cy
        .get('#result')
        .should('have.text','You entered: Ok')

    })
    it("Get Text and verify",()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        
        cy.get(':nth-child(1) > button')
        .click()
        cy.on("window:alert",(str)=>{

            expect(str).to.equal("I am a JS Alert")
        })
        
    })

    it.only("DB click-Rightclick",()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        
        cy
        .get(':nth-child(2) > button')
        .dblclick()
        //.rightclick()
    })

})