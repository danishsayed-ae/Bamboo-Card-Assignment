class CheckoutPage {
    clickNextAndGoToReviewAndPayments() {
        cy.get('.button', { timeout: 12000 }).should('be.visible').click();
    }

    placeOrder() {
        cy.get('button[title="Place Order"]', { timeout: 12000 }).should('be.visible').click();
    }
}

export default CheckoutPage;


