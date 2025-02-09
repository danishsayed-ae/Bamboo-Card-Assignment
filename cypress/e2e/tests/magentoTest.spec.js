/// <reference types="cypress" />
import RegistrationPage from '../page-objects/RegistrationPage';
import LoginPage from '../page-objects/LoginPage';
import ProductPage from '../page-objects/ProductPage';
import WishlistPage from '../page-objects/WishlistPage';
import NavigationPage from '../page-objects/NavigationPage';
import ShoppingCartPage from '../page-objects/ShoppingCartPage';
import CheckoutPage from '../page-objects/CheckoutPage';
import AddressBookPage from '../page-objects/AddressBookPage';


describe('User registration and login test', () => {
    const onRegistrationPage = new RegistrationPage();
    const onLoginPage = new LoginPage();
    const onProductPage = new ProductPage();
    const onWishlistPage = new WishlistPage();
    const navigateTo = new NavigationPage();
    const onShoppingCartPage = new ShoppingCartPage();
    const onCheckoutPage = new CheckoutPage();
    const onAddressBookPage = new AddressBookPage();

    beforeEach(() => {
        cy.visit('/');
    });

    it('should register a new user', () => {
        cy.fixture('user.json').then((user) => {
            navigateTo.registrationPage();
            onRegistrationPage.performUserRegistration(user);
            cy.get('.message-success > div').should('have.text', 'Thank you for registering with Main Website Store.')
            cy.get('.base').should('have.text', 'My Account');
        });
    });

    it('should login and update default address', () => {
        cy.fixture('user.json').then((user) => {
            cy.fixture('cart.json').then((cart) => {
                navigateTo.loginPage();
                onLoginPage.performLogin(user);
                cy.get('.base').should('have.text', 'My Account');
                navigateTo.addressBookPage();
                cy.get('.base').should('have.text', 'Add New Address');
                onAddressBookPage.fillContactInformation(cart.address);
                onAddressBookPage.fillAddress(cart.address);
                onAddressBookPage.saveAddress();
            });
        });
    });

    it('should login and place an order with multiple products', { timeout: 180000 }, () => {
        cy.fixture('user.json').then((user) => {
            cy.fixture('cart.json').then((cart) => {
                navigateTo.loginPage();
                onLoginPage.performLogin(user);
                cy.get('.base').should('have.text', 'My Account');
                cy.get('.counter-number').invoke('text').then(() => {
                    onProductPage.searchProductAndAddToCart(cart.products)
                });
                navigateTo.shoppingCartPage();
                cart.products.forEach((product) => {
                    cy.contains('.item', product.name, { timeout: 6000 }).should('be.visible');
                });
                onShoppingCartPage.clickProceedToCheckout();
                onCheckoutPage.clickNextAndGoToReviewAndPayments();
                onCheckoutPage.placeOrder();
                cy.get('.base', { timeout: 6000 }).should('have.text', 'Thank you for your purchase!');
            });
        });
    });

    it('should login and add multiple products to wishlist and then checkout from wishlist', { timeout: 180000 }, () => {
        cy.fixture('user.json').then((user) => {
            cy.fixture('cart.json').then((cart) => {
                navigateTo.loginPage();
                onLoginPage.performLogin(user);
                cart.products.forEach((product) => {
                    onProductPage.searchProductAndAddToWishlist(product.name);
                });
                onWishlistPage.addAllProductsToCart();
                navigateTo.shoppingCartPage();
                cart.products.forEach((product) => {
                    cy.contains('.item', product.name, { timeout: 6000 }).should('be.visible');
                });
                onShoppingCartPage.clickProceedToCheckout();
                onCheckoutPage.clickNextAndGoToReviewAndPayments();
                onCheckoutPage.placeOrder();
                cy.get('.base', { timeout: 6000 }).should('have.text', 'Thank you for your purchase!');
            });
        });
    });

    it('should login and search product then verify the accuracy of result', () => {
        cy.fixture('user.json').then((user) => {
            cy.fixture('cart.json').then((cart) => {
                navigateTo.loginPage();
                onLoginPage.performLogin(user);
                onProductPage.searchProductAndVerifyResult(cart.products);
            });
        });
    });

    afterEach(() => {
        cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action', { timeout: 10000 }).click();
        cy.contains('Sign Out', { timeout: 10000 }).click();
        cy.get('.base', { timeout: 10000 }).should('be.visible').and('contain.text', 'You are signed out');
    });
});