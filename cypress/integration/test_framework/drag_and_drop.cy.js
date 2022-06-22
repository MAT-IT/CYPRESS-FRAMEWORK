//import '@4tw/cypress-drag-drop'// buraya spesifik import yaparsak sadece bu class de kullanilir
//commands.js ye imort yaparsak tum classlarda kullanilabilir
//su anda commands e import yapildi
/* 1-once cypress drag drop pluginini indirdik ve import yaptik
  2-once imc in alinacagi yer locate edildi
  3-drag() una imc koyacagimiz location eklendi*/
describe("drag and drop",()=>{
    it("double click",()=>{
        cy.visit('https://www.w3schools.com/html/html5_draganddrop.asp')
        .wait(2000)
        cy.get('#accept-choices')
        .click()
        
       cy.get('#drag1')
       .drag("#div2")
        
    })
})