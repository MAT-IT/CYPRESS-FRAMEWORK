class homepage {
    getSigninLink(){
        return cy.contains("Sign In")
    }
}

export default homepage;