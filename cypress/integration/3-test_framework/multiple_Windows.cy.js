describe("multiple window test",()=>{
    it("multiple window",()=>{
        cy.visit('https://the-internet.herokuapp.com/windows')

        /*
        1. method = yeni acilan (target_blank windowuna) sayfaya erismek icin 
        target attribute invoke() ile removeAttr kullanilarak siliniyor
        */
        cy
        .get('.example > a')
        .invoke("removeAttr","target") //target attribute siliniyor
        .click()

        cy
        .get("h3")
        .should("have.text",("New Window"))


    })
    it.only("multiple window",()=>{
        /*
        2. method =prop olarak href attributunden url alinarak sayfaya ulastik
        */
      
        cy.visit('https://the-internet.herokuapp.com/windows')
        

        cy.get('.example > a')
        .then((element)=>{
            const newUrl=element.prop('href')
            cy.visit(newUrl)
                      
            
        })

        cy
        .get("h3")
        .should("have.text",("New Window"))
       
        
       

    })
})