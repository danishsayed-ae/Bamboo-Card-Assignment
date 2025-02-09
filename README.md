# 🏆 Bamboo Card Assignment - Cypress Automation

## 📌 Project Overview
This repository contains an automated test suite for the **Bamboo Card Assignment**, developed using **Cypress**. The test suite covers end-to-end scenarios including **user registration, login, product search, wishlist management, cart checkout, and address book updates**.

The project follows the **DRY (Don't Repeat Yourself)** and **KISS (Keep It Simple, Stupid)** principles to ensure maintainability and efficiency.

---

## 🚀 Tech Stack
- **Cypress** - JavaScript-based test automation framework  
- **Mocha** - Test runner used by Cypress  
- **Chai** - Assertion library used for validation  
- **Mochawesome** - Custom reporting for test execution  

---

## 🛠️ Setup & Installation
### **1️⃣ Clone the Repository**

git clone https://github.com/danishsayed-ae/Bamboo-Card-Assignment.git

### Install dependencies:

npm install


## Running Tests

### Run all tests in UI mode:

npx cypress open

### Run tests in headless mode:

npx cypress run

### Generate Mochawesome Report:

npx cypress run --reporter mochawesome


## Test Cases Covered
- User Registration - Validate successful user registration.
- User Login - Verify login with valid credentials.
- Product Search & Filtering - Ensure accurate search results.
- Add to Cart & Wishlist - Verify cart and wishlist functionalities.
- Checkout Process - Validate order placement and confirmation.
- Address Management - Update and save address details.