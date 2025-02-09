class NavigationPage {
    registrationPage() {
        cy.visit('/customer/account/create/');
    }

    loginPage() {
        cy.visit('/customer/account/login/');
    }

    shoppingCartPage() {
        cy.visit('/checkout/cart/');
    }

    addressBookPage() {
        cy.get('.items', { timeout: 6000 }).find('li').contains('Address Book').should('be.visible').click({ force: true });
    }

    wishListPage() {
        cy.get('.items', { timeout: 6000 }).find('li').contains('My Wish List').should('be.visible').click({ force: true });
    }
}

export default NavigationPage;