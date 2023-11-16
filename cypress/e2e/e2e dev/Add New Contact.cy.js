import LoginPage from "./Tests/Pages/LoginPage";
import config from "./Fixtures/Data/config";

const login = new LoginPage();

const comment = 'New contact was created successfully';

describe('Test New contact adding', function () { 
    beforeEach(() => {
        cy.visit('https://app.dev.systima.no/login');
    });
    it ('Add new contact',()=>{  
        login.LoginIn(config.user.username, config.user.pass)
  

    Cypress.on('uncaught:exception', (err, runnable, promise) => {
        if (promise) {
          return false
        }
    });
    cy.get('[href="/moviesonwaras/contacts"] > .v-list-item__content > .v-list-item__title').click();

        cy.get('#contacts-create-contact-button').click();
        cy.get('input[role="checkbox"][id="contact-editor-organisation-checkbox"]')
        .check({ force: true });

        // Assuming there are multiple input elements with the same class and you want to target a specific one by its index (e.g., the second one)
//cy.get('.v-input__slot input[type="text"]').eq(1).type('Das').should('have.value', 'Das'); 

//cy.get('#contacts-search').scrollIntoView().type('Das').click({ force: true });
cy.get('#contacts-search').click().type('Das');
      cy.contains('Das Consulting (829914182)').click();
      cy.get('div[role="listbox"]').click({ force: true });
      cy.get('.d-flex > div > .v-btn').click();

      const dropdown = cy.get('div[role="listbox"]');
      dropdown.scrollIntoView();
      dropdown.click({force: true});
      cy.get('div[role="listbox"]').click({ force: true });

            });
        });
    


