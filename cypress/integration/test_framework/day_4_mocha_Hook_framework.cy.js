 /*  
    MOCHA FRAMEWORK
    testing framework type of javascript 
    by default cypress use mocha framework we dont neew install any library
    most used properties are 
    describe==>to create test classes
    it ==> to create single test cases
     
    before() ==> runs before all it() only once. like beforeclass in testNG
    beforeEach ==> runs before each it() only once. like before method in testNG

    after()
    afterEach()

    
    it.skip()
    it.only()
    we use these annotations test cases preconditions assertions 
    */

describe("hooks",()=>{   
    before("before",()=>{
        cy.visit("https://qa-environment.crystalkeyhotels.com/")
        .wait(2000)        

    })    

    it("before test",()=>{

        cy.get("input[type='submit']").should("have.value","Check Availability")
    })

    it("before test 2",()=>{

        cy.contains("Log in").click()

    })
    
})