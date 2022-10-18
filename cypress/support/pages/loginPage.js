export class LoginPage {
    constructor() {
        this._selectors = {
            loginCodefresh: '.js-btn-login-codefresh',
            usernameField: '[placeholder="Username"]',
            passwordField: '[placeholder="Password"]',
            submit: '[type="Submit"]',
        };
    }

    getSubmit() {
        return cy.get(this._selectors.submit);
    }

    getUsernameField() {
        return cy.get(this._selectors.usernameField);
    }

    getPasswordField() {
        return cy.get(this._selectors.passwordField);
    }

    enterToUsernameField(username) {
        return this.getUsernameField().type(username)
    }

    enterToPasswordField(password) {
        return this.getPasswordField().type(password)
    }

        getLoginCodefresh() {
        return cy.get(this._selectors.loginCodefresh);
    }

    clickToSubmit() {
        return this.getSubmit().click();
    }

    clickToLogInOrSignUp() {
        return this.getLoginCodefresh().click();
    }
}
