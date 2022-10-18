import { Given } from 'cypress-cucumber-preprocessor/steps';

Given(/^I'am a visit to "login" page and login$/, () => {
    cy.login();
});