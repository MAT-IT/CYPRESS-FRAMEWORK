describe("pull data from fixture",()=>{
     before(function(){
        cy.fixture("googledata").then(
            function(data){
                this.data=data
            }
        )
     })

    it("fixture data",function(){
        cy.visit(this.data.url)
        cy.get('#L2AGLb > .QS5gu').click()
        cy.get('.gLFyf').type(this.data.input)
        cy.get('.FPdoLc > center > .gNO89b').click({force: true})
    })
})