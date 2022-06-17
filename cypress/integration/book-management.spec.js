/// <reference types="cypress" />

import { List } from "../support/page-objects/list.page";

describe("Book management", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.url().should("include", "/list");
  });

  it("should be able to add a book", () => {
    const list = new List();
    cy.registerUser();
    list.btnDiscover().click(); // go to Discover tab
    cy.url().should("include", "/discover");

    list.btnAddBookToList("How to Be an Antiracist").click(); // add specified book to the list
    list.btnReadingList().click(); // go back to reading list & check that it is present

    list.bookTitle().should("be.visible");
    cy.contains("How to Be an Antiracist");
  });
});
