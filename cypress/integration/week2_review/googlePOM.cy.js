import Googlehomepage from "../pageObjectRepository/googlehomepage"

describe("GoolePom",()=>{
    before(function(){
        cy.fixture("googledata").then(
            function(data){
                this.data=data
            }
        )
     })
   

   it("Google POM",function(){
       cy.visit(this.data.url)
       cy.get('#L2AGLb > .QS5gu').click()
       const google = new Googlehomepage 
       google.getsearchbar().type(this.data.input)
       google.getsubmitbutton().click({force: true})
   })
})