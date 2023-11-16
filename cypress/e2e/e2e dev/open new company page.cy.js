import LoginPage from "./Tests/Pages/LoginPage";
import config from "./Fixtures/Data/config";

const login = new LoginPage();

describe('Open Company dashboard', function () {
  beforeEach(() => {
    cy.visit('https://app.dev.systima.no/login');
  });

  it('Should open company page', () => {
    login.LoginIn(config.user.username, config.user.pass);
   cy.contains('https://app.dev.systima.no/artschweizer/dashboard').click();
    cy.url().should('include', '/artschweizer/dashboard');
});
});