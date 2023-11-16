

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
  
      it('should show an error for invalid credentials', () => {
      cy.get('#input-12').type('joachim0101@systima.no');
      cy.get('#input-15').type('123456788');
      cy.get('button[type="submit"]').click();
      
      cy.get('.error-message').should('be.visible'); 
      cy.url().should('not.include', '/dashboard'); 
    });
  });
});
  
