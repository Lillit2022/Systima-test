import LoginPage from "./Tests/Pages/LoginPage";
import config from "./Fixtures/Data/config";

const login = new LoginPage();

const comment = 'User was logged in successfully';

describe('Test User LogIn', function () {
  beforeEach(() => {
    cy.intercept('GET', '/moviesonwaras/dashboard', {}); 

        cy.visit('https://app.staging.systima.no/login');
  });

  it('Log In as existing user', () => {
        login.LoginIn(config.user.username, config.user.pass);

        cy.url('https://app.staging.systima.no/login').should('include','https://app.staging.systima.no/moviesonwaras/dashboard'); 
    });

  it('Handles invalid credentials', () => {
    login.LoginIn('joachim@systima.no', '123456788');

    cy.url().should('include', '/login'); 
    cy.contains('Feil brukernavn / passord').should('be.visible'); 
  });
  });

