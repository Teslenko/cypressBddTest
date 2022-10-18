import { When } from 'cypress-cucumber-preprocessor/steps';
import { DashboardPage } from '../../../support/pages/dashboardPage';

const dashboardPage = new DashboardPage();

When('Go to Endpoint {string}', function (url) {
    cy.visit(url);
});

Then('Dashboard page will be displayed', function () {
    dashboardPage.checkCodefreshLogo("exist")
});

And('Click to drop-down button', function () {
    cy.wait(300)
    dashboardPage.clickIconOutlinedDown()
    dashboardPage.getOrganizationsDropDownList("exist")
});

Then('Check that organization {string} are displayed', function (organization) {
    dashboardPage.getOrganizationsDropDownList().contains(organization)
});

Then('Click to organization {string}', function (organization) {
    dashboardPage.getOrganizationsDropDownList().contains(organization).click()
});

Then('Dashboard page with data will be displayed', function () {
    dashboardPage.getWelcomePage().should("be.visible")
});