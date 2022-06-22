//import 'cypress-iframe'; ifareme metodunu kullanabilmek icin pagei node js ye yuklemek gerekiyor.

describe('iframe test',()=>{
    it('iframe test',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')  
        // cy// frame e girildigini verif yapiyor iframe bu olmadan da calisiyor,
        // .frameLoaded('#mce_0_ifr')     

        cy
        .iframe()
        .find("p")
        .should("have.text","Your content goes here.")        
        .clear()

        cy
        .iframe()
        .find("p")
        .type("Pazartesi cigerini yerim!!!")

        cy.get('.large-4 > div')
        .should("have.text","Powered by Elemental Selenium")

        cy
        .iframe()
        .find("p")
        .clear()
        
        
     

       
     
        
        
        

    })
})