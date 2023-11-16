import LoginPage from "./Tests/Pages/LoginPage";
import config from "./Fixtures/Data/config";

const login = new LoginPage();

const comment = 'New Company was added successfully';

describe('Test New Company adding', function () { 
    beforeEach(() => {
        cy.visit('https://app.dev.systima.no/login');
    });
    it ('Add new company',()=>{  
        login.LoginIn(config.user.username, config.user.pass)
  

    Cypress.on('uncaught:exception', (err, runnable, promise) => {
        if (promise) {
          return false
        }
        cy.contains ('v-input__append-inner').click();

  
    });
     });
    });
  
    


        
