describe("viewport",()=>{
    //bu metodla sayfanin genislik ve uzunluk pixsellerini istedigimiz gibi ayarlayabiliyoruz
    //docs da tanimlanan cihazlarda sayfanin gorunumunu veriyor
    it("viewport",()=>{
        cy.visit('https://www.amazon.com/')
        .wait(3000)
        cy.viewport("iphone-6")
        .wait(4000)
        //cy.screenshot()
    })
})