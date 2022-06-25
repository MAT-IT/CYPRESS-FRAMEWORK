describe("upload img",()=>{

    it("upload img",()=>{
        
        const file1 = "img_1.jpg"
        const file2 = "img_2.jpg"

    cy.visit("https://the-internet.herokuapp.com/upload")
    
    cy.get('#file-upload').attachFile(file1)

    cy.get("input[id='file-upload']").should("contain.value","img_1.jpg")
       
        //cy.get('#file-submit').click()

    })

})