class AddressBookPage {
    fillContactInformation(address) {
        cy.get('#firstname').clear().type(address.firstName);
        cy.get('#lastname').clear().type(address.lastName);
        cy.get('#company').type(address.company);
        cy.get('#telephone').type(address.phone);
    }

    fillAddress(address) {
        cy.get('#street_1').type(address.street);
        cy.get('#city').type(address.city);
        cy.get('#country', { timeout: 10000 }).should('be.visible');
        cy.get('#country').select(address.country, { force: true });
        cy.get('#region').type(address.state);
        cy.get('#zip').type(address.zip);
    }

    saveAddress() {
        cy.get('button[title="Save Address"]').click();
    }
}

export default AddressBookPage;