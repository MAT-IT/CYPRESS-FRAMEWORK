describe("day two manuel location and navigation",()=>{
    it.skip ("manuel locatin test",()=>{
        cy.visit("https://qa-environment.crystalkeyhotels.com/");
        cy.contains("Log in").click();
        /*note: we should always try get() to find the element first
        if this fails to locate element (not visible, not unique ...) then try find
        if that is also does not locate the element then use within*/
        //cy.get("li").find("a[href='/Rooms/6']").click();
        cy.get("div.categories").find("a[href='/Rooms/8']").should("have.length",1)
        cy.get("li a").should("have.length",29);
        //cy.get("div.categories").contains("King").click();
        cy.get("div.categories").within(()=>{cy.get("a[href='/Rooms/8']").click()})
    }

    )
    it("navigetion and refresh",()=>{
        cy.visit("https://qa-environment.crystalkeyhotels.com/");
        cy.contains("Log in").click().wait(3000);
        cy.go("back").wait(3000);
        cy.go("forward").wait(2000);
        //true means to force the refresh 
        cy.reload(true);     
    }

    )
    it.skip("double forward",()=>{
        cy.visit("https://qa-environment.crystalkeyhotels.com/");
        cy.contains("Log in").click();
        cy.get('.categories > :nth-child(2) > a').click().wait(3000);
        cy.go("back").go("back")
    })
}

)