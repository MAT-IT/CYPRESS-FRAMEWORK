import AfterLoginPage from "../pageObjectRepository/AfterLoginPage"
import homepage from "../pageObjectRepository/homepage"
import loginpage from "../pageObjectRepository/loginpage"

describe("Paylinn", () => {

    before(function () {
        //this is used to acsess the data that is inside creds.json
        // cy.fixture("NAME OF THE FILE")
        // promise.then
        cy.fixture("creds").then(
            function (data) {
                this.data = data
            }
        )

    })

    beforeEach("url paylinn", function () {
        cy.visit(this.data.url)


    })

    it("used fixture to  login paylinn", function () {
        //creating object from page class
        const homepageobj = new homepage();

        const loginpageobj = new loginpage();

        const afterloginpage = new AfterLoginPage();

        homepageobj.getSigninLink().click()

        //enterin user name and verify value
        loginpageobj.getUserNameBox().type(this.data.username)
            .should("have.attr", "value", this.data.username)

        //entering password and verify value
        loginpageobj.getPasswordBox().type(this.data.password)
            .should("have.attr", "value", this.data.password)


        loginpageobj.getLoginButton().click()

        //multiply verifications
        afterloginpage.getnavbar()
            .should("contain.text", "Logout")
            .and("contain.text", "React User")
            .and("contain.text", "Welcome")

    })

})