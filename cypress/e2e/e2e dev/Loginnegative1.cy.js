import LoginPage from "./Tests/Pages/LoginPage";
import config from "./Fixtures/Data/config";

const login = new LoginPage();

describe('Test User LogIn', function () {
  beforeEach(() => {
    cy.intercept('GET', '/moviesonwaras/dashboard', {}); 
    cy.visit('https://app.dev.systima.no/login');
  });

  it('Log In as existing user', () => {
    login.LoginIn(config.user.username, config.user.pass);

    // Test for successful login
    cy.url().should('include', '/dashboard');
  });

  it('Log In with wrong credentials', () => {
    cy.get('#input-12').type('joachim0101@systima.no');
    cy.get('#input-15').type('123456788');
    cy.get('button[type="submit"]').click();

    // Verify that an error message is displayed
    cy.get('.error-message').should('be.visible');

    // Verify that the URL does not contain '/dashboard'
    cy.url().should('not.include', '/dashboard');
  });
});
