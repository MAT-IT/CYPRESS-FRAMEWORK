describe("reuasble upload",()=>{

    it("reusable uploading",()=>{
        
        cy.fileupload(["img_1.jpg","img_2.jpg"])
    })

})