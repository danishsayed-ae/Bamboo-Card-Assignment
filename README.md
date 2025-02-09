Magento E-Commerce Test Automation

Overview

This project is an automated test suite for testing the Magento e-commerce website using Cypress. It covers various critical user journeys, including user registration, login, product search, adding products to the cart, wishlist functionality, checkout process, and order placement.

Tech Stack

Test Framework: Cypress

Programming Language: JavaScript

Reporting Library: Mochawesome

Design Patterns: Page Object Model (POM)

Principles Followed

DRY (Don't Repeat Yourself): Reusable page object classes reduce code duplication.

KISS (Keep It Simple, Stupid): The test scripts are easy to read, maintain, and extend.

Project Structure

├── cypress
│   ├── e2e
│   │   ├── tests
│   │   │   ├── registration.cy.js
│   │   │   ├── login.cy.js
│   │   │   ├── product.cy.js
│   │   │   ├── wishlist.cy.js
│   │   │   ├── cart.cy.js
│   │   │   ├── checkout.cy.js
│   ├── page-objects
│   │   ├── RegistrationPage.js
│   │   ├── LoginPage.js
│   │   ├── ProductPage.js
│   │   ├── WishlistPage.js
│   │   ├── ShoppingCartPage.js
│   │   ├── CheckoutPage.js
│   │   ├── NavigationPage.js
│   ├── fixtures
│   │   ├── user.json
│   │   ├── cart.json
│   ├── support
│   │   ├── commands.js
├── cypress.config.js
├── README.md
├── package.json

Installation

Prerequisites

Node.js (v16 or later)

Cypress installed globally or locally in the project

Setup

Clone the repository:

git clone <repo-url>
cd <project-folder>

Install dependencies:

npm install

Running Tests

Run all tests in UI mode:

npx cypress open

Run tests in headless mode:

npx cypress run

Generate Mochawesome Report:

npx cypress run --reporter mochawesome

Test Cases Covered

User Registration - Validate successful user registration.

User Login - Verify login with valid credentials.

Product Search & Filtering - Ensure accurate search results.

Add to Cart & Wishlist - Verify cart and wishlist functionalities.

Checkout Process - Validate order placement and confirmation.

Address Management - Update and save address details.

Concurrency & Load Tests - Simulate multiple users interacting with the platform.

Reporting

Tests generate reports using Mochawesome.

Report files are saved in the mochawesome-report directory after execution.

CI/CD Integration

Cypress can be integrated with GitHub Actions, Jenkins, or other CI/CD pipelines for automated execution.

Modify .github/workflows/cypress.yml (if using GitHub Actions) to automate tests on PR merges.

Contribution

Fork the repository

Create a feature branch

Commit changes

Open a pull request

License

This project is licensed under the MIT License.