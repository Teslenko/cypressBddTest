import { enterCredentialsAndSubmit, navigateToWelcomePage } from './commandFunctions';

Cypress.Commands.add('navigateToWelcomePage', () => {
    navigateToWelcomePage()
})

Cypress.Commands.add('login', (username, password) => {
    navigateToWelcomePage()
    enterCredentialsAndSubmit(username, password)
})