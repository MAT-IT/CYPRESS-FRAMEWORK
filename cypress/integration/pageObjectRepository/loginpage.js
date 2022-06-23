class  loginpage{
    getUserNameBox(){
      return  cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
    }

    getPasswordBox(){
        return cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
    }

    getLoginButton(){
        return  cy.get('.MuiButtonBase-root')
    }
   
}

export default loginpage