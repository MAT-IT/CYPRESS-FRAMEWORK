/*
1-"-npm install --save-dev cypress-file-upload" install ediliyor
2-import yapiliyor commands dosyasina
3-img leri fixtures dosyasina at ve adini al kullan 
 veya alinacak img cypress dosyasinda degilse  path ini al 
4-path veya img ismini attachFile komutuna yaz
*/

describe("file upload",()=>{
    //dscribe da tanimlanan bir degisken butun it fonksiyonlarinda kullanilabilir
    const file2="img_2.jpg"
    it("file upload",()=>{
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
        //cy.get('#filesToUpload').attachFile("img_1.jpg").attachFile("img_2.jpg")//override yapiyor ikinci yi yukluyor
        const file1="img_1.jpg"
        //const file2="img_2.jpg"
        //toplu dosya yuklemelerde array olarak attachFile metoduna gonderiyoruz
        cy.get('#filesToUpload').attachFile([file1,file2])
        cy.get('#fileList > li').should("contain.text","img")
    })
    
    it.only("file upload",()=>{
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
        
        //const file2="img_2.jpg"
        //yuklenen dosyanin adini degistirme islemi
        cy.get('#filesToUpload').attachFile({filePath:file2,fileName:"changeName"})
        cy.get('#fileList > li').should("contain.text","changeName")
    })



})