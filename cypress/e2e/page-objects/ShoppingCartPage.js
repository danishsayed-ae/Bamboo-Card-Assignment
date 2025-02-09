class ShoppingCartPage {
    clickProceedToCheckout() {
        cy.get('[data-role="proceed-to-checkout"]', { timeout: 6000 }).scrollIntoView().should('be.visible').click();
    }
}

export default ShoppingCartPage;