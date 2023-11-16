import LoginPage from "./Tests/Pages/LoginPage";
import config from "./Fixtures/Data/config";

const login = new LoginPage();

const comment = 'User was logged in successfully';

describe('Test User LogIn', function () {
  beforeEach(() => {
    cy.intercept('GET', '/moviesonwaras/dashboard', {}); 

        cy.visit('https://app.dev.systima.no/login');
  });

  it('Log In as existing user', () => {
        login.LoginIn(config.user.username, config.user.pass);

        cy.url('https://app.dev.systima.no/login').should('include','https://app.dev.systima.no/moviesonwaras/dashboard'); 
    });

});
 

