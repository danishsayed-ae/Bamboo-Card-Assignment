class LoginPage {
    performLogin(user) {
        cy.get('#email').type(user.email);
        cy.get('#pass').type(user.password);
        cy.get('#send2').click();
    }
}

export default LoginPage;