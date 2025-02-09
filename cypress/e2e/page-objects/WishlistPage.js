class WishlistPage {
    addAllProductsToCart() {
        cy.get('button[title="Add All to Cart"]').should('be.visible').click({ force: true });   
    }

    checkoutFromWishlist() {
        cy.visit('/wishlist/');
        cy.get('.tocart').click();
        cy.get('.checkout').click();
    }
}

export default WishlistPage;