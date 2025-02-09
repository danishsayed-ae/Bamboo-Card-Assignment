class ProductPage {
    searchProductAndVerifyResult(products) {
        products.forEach((product) => {
            cy.get('#search').clear().type(product.name);
            cy.get('button[title="Search"]').click();
            cy.contains('.product-item', product.name, { timeout: 6000 }).should('be.visible');
        });
    }

    searchProductAndAddToCart(products) {
        products.forEach((product) => {
            cy.get('#search').clear().type(product.name);
            cy.get('button[title="Search"]').click();
            cy.contains('.product-item', product.name, { timeout: 6000 }).should('be.visible').within(() => {
                cy.get('button[title="Add to Cart"]').scrollIntoView().should('be.visible').click({ force: true });
            });
            // cy.get('.counter-number', { timeout: 6000 }).should('be.visible').then(() => {
            //     callback(product, index);
            // });
        });
    }

    searchProductAndAddToWishlist(productName) {
        cy.get('#search').clear().type(productName);
        cy.get('button[title="Search"]').click();
        cy.contains('.product-item', productName, { timeout: 6000 }).should('be.visible').within(() => {
            cy.contains('Add to Wish List').scrollIntoView().click({ force: true });
        });
    }
}

export default ProductPage;