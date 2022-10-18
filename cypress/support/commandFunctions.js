import { LoginPage } from './pages/loginPage';

/**
 * This page houses supporting functions for the Cypress commands.js file. This is in place to keep that file clean and
 * readable. Page objects and other imports should be kept to this file. This should make it
 */
const loginPage = new LoginPage();

export function navigateToWelcomePage(
    env = Cypress.env('ENV'),
) {
    cy.visit(env)
}

export function enterCredentialsAndSubmit(
    username = Cypress.env('TEST_USER'),
    password = Cypress.env('TEST_PWD'),
) {
    loginPage.clickToLogInOrSignUp()
    loginPage.enterToUsernameField(username)
    loginPage.enterToPasswordField(password)
    loginPage.clickToSubmit()
}