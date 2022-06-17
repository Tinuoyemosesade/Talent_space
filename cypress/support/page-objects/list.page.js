/// <reference types="cypress" />
export class List {
    toolbar() {
        return cy.get("div#root > div:first-child");
    }

    btnReadingList() {
        return cy.get("nav").find("li:first-child");
    }

    btnDiscover() {
        return cy.get("#root li:last-child");
    }

    btnAddBookToList(name) {
        return cy
            .get(`li[aria-label = '${name}']`)
            .find('button[aria-label = "Add to list"]')
            .first();
    }

    btnLogOut() {
        return cy.get(".css-18dcnxc"); // would add a data-cy here, .css-18dcnxc looks like a class name that will change
    }

    pageHeader() {
        return cy.get("h1");
    }

    pageList() {
        return cy.get("#root li");
    }

    bookTitle() {
        return cy.get("h2", { timeout: 10000 }); // get a h2 on the page, but wait max 10 seconds for it
    }
}
