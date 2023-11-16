import LoginPage from "./Tests/Pages/LoginPage";
import config from "./Fixtures/Data/config";

const login = new LoginPage();

const comment = 'New invoice was created successfully';

describe('Test New invoice creation', function () { 
    beforeEach(() => {
        cy.visit('https://app.staging.systima.no/login');
    });
    it ('Create new invoice',()=>{  
        login.LoginIn(config.user.username, config.user.pass)
  

    Cypress.on('uncaught:exception', (err, runnable, promise) => {
        if (promise) {
          return false
        }
    });
    cy.get('[href="/moviesonwaras/invoices"] > .v-list-item__content').click();
    cy.get('[href="/moviesonwaras/invoices/create"]').click();
    cy.get('i.v-icon.mdi.mdi-menu-down.theme--light.primary--text').click();
    cy.contains('Aga Gas Limited').click();

    cy.get('#new-invoice-comment').type('test invoice1');

    cy.get('#new-invoice-new-product-line-button').click();

    cy.contains('White ink').click();
    cy.get('button.mt-2.v-btn.v-btn--has-bg.theme--light.v-size--default.primary').click();

    cy.contains('label', 'Mottakers e-post *')
  .next('input[type="text"]').type('liza+33@systima.no');
    cy.get('button:contains("Send e-post")').click();
    cy.get('a.no-active.v-btn--active.v-btn.v-btn--block.v-btn--router.v-btn--text.theme--light.v-size--default.primary--text').eq(0).click();

     

    });
});
