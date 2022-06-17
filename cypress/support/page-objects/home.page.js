/// <reference types="cypress" />
export class Home {
    login() {
        return cy.get("button:first-child");
    }

    register() {
        return cy.get("button:last-child");
    }

    username() {
        return cy.get("#username");
    }

    password() {
        return cy.get("#password");
    }

    btnSubmit() {
        return cy.get("button[type=submit]");
    }

    errorMessage() {
        return cy.get('div[role = "alert"]');
    }
}
