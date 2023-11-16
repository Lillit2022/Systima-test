import LoginPage from "./Tests/Pages/LoginPage";
import config from "./Fixtures/Data/config";

const login = new LoginPage();

const comment = 'New purchase was created successfully';

describe('Test New purchase bookkept', function () { 
    beforeEach(() => {
        cy.visit('https://app.staging.systima.no/login');
    });
    it ('Bookkeep new purchase',()=>{  
        login.LoginIn(config.user.username, config.user.pass);

        Cypress.on('uncaught:exception', (err, runnable, promise) => {
        if (promise) {
          return false
        }
      });
      
      cy.contains('.v-list-item__title', 'Bokføring').click();
      cy.contains('.v-list-item__title', 'Bokfør andre filer').click();
      
      cy.get('.v-list-item__title', { timeout: 30000 }).should('contain', 'Kontakt (valgfri ved kvittering)').click();

      //cy.contains('.v-list-item__title', 'Kontakt (valgfri ved kvittering)').click(); 
      cy.contains('.v-list-item__title', 'Aker Art').click(); 

      cy.contains('.v-text-field__slot','Totalt beløp inkl. mva. *').type ('1500');
      cy.contains('.v-text-field__slot','Fakturadato *').type('04-10-2023');
      cy.contains('.v-text-field__slot','Forfallsdato').type('18-10-2023');
      cy.contains('.v-text-field__slot' ,'Fakturanr.').type('88');
      
      //cy.contains('.v-select__slot','Konto *').type('1000').type('{enter}');

      cy.get('.v-list-item__title').contains('1000 Utvikling, ervervet').click();


      

      cy.contains('.v-select__slot','Mva. kode *').click();
      cy.contains('.v-list-item__title>1','(25.00%) Fradrag inngående mva, høy sats').click();

      cy.contains('v-text-field__slot','Betalingsdato*').type('22-10-2023');
      cy.contains('.v-btn__content',' Bokfør ').click();      
         
     
   
      });
    });
  

      
    