import LoginPage from "./Tests/Pages/LoginPage";
import config from "./Fixtures/Data/config";

const login = new LoginPage();

const comment = 'New voucher was created successfully';

describe('Test New voucher creation', function () { 
    beforeEach(() => {
        cy.visit('https://app.dev.systima.no/login');
    });
    it ('Create new voucher',()=>{  
        login.LoginIn(config.user.username, config.user.pass)
    
    Cypress.on('uncaught:exception', (err, runnable, promise) => {
        if (promise) {
          return false
        }
      });

      cy.contains('.v-list-item__title', 'Bokføring').click();
      cy.contains('Bokfør andre filer').click();
            
      cy.get('.v-input__slot[aria-haspopup="listbox"]').click();

cy.get('.v-select__selections').contains('Bokføring fri').click();

      });
    });
    
  