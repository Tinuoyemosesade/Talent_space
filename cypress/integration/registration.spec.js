/// <reference types="cypress" />

import { Home } from "../support/page-objects/home.page";
import { List } from "../support/page-objects/list.page";

describe("Registration flow", () => {
  const list = new List();
  const home = new Home();

  beforeEach(() => {
    cy.visit("/");
    cy.url().should("include", "/list");
  });

  it("should be able to register a new user", () => {
    cy.registerUser();
    list.pageList().should("have.length", 3);
    list.btnLogOut().should("exist");
    list.toolbar().should("contain", Cypress.env("username"));
  });

  it("should not allow an existing user to register", () => {
    cy.registerUser();
    cy.logout();
    cy.registerUser();
    home
      .errorMessage()
      .should(
        "have.text",
        `There was an error: Cannot create a new user with the username "${Cypress.env(
          "username"
        )}"`
      );
  });

  it("should let existing users login", () => {
    cy.registerUser();
    cy.logout(); // call the custom command from cypress/support/command.js
    cy.login(); // call the custom command from cypress/support/command.js
    list.pageList().should("have.length", 3);
    list.btnLogOut().should("have.text", "Logout");
    list.toolbar().should("contain", Cypress.env("username"));
  });

  it("should not allow a non-registered user to login", () => {
    cy.login();
    home
      .errorMessage()
      .should("have.text", `There was an error: Invalid username or password`);
  });
});
