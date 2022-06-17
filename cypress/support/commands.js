import { Home } from "../support/page-objects/home.page";
import { List } from "../support/page-objects/list.page";

const home = new Home();
const list = new List();

Cypress.Commands.add("login", () => {
    home.login().click();
    home.username().clear().type(Cypress.env("username")); // user should be able to choose a username
    home.password().clear().type(Cypress.env("password"));
    home.btnSubmit().click();
});

Cypress.Commands.add("logout", () => {
    list.btnLogOut().click();
    list.pageHeader().should("contain", "My Library");
});

Cypress.Commands.add("registerUser", () => {
    home.register().click(); // user should be able to click "register" button
    home.username().clear().type(Cypress.env("username")); // user should be able to choose a username
    home.password().clear().type(Cypress.env("password"));
    home.btnSubmit().click();
});
