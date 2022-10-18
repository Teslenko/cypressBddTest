export class DashboardPage {
    constructor() {

        this._selectors = {
            iconOutlinedDown: '[name="ant_icon_outlined_down"]',
            codefreshLogo: '[alt="Codefresh logo"]',
            organizationsDropDownList: '[nztitle="Organizations"]',
            welcomePage: '.welcome-page__container > :nth-child(1)',
        };
    }

    getWelcomePage() {
        return cy.get(this._selectors.welcomePage);
    }

    getOrganizationsDropDownList() {
        return cy.get(this._selectors.organizationsDropDownList);
    }

    getIconOutlinedDown() {
        return cy.get(this._selectors.iconOutlinedDown);
    }

    getCodefreshLogo() {
        return cy.get(this._selectors.codefreshLogo);
    }

    checkCodefreshLogo(status) {
        return this.getCodefreshLogo().should(status);
    }

    clickIconOutlinedDown() {
        return this.getIconOutlinedDown().click();
    }
}
