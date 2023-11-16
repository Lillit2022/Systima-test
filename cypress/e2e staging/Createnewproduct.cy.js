import LoginPage from "./Tests/Pages/LoginPage";
import config from "./Fixtures/Data/config";

const login = new LoginPage();

describe('Test New Product Creation', function () {
  beforeEach(() => {
    cy.visit('https://app.staging.systima.no/login');
  });

  it('Should add a new product', () => {
    login.LoginIn(config.user.username, config.user.pass);

    Cypress.on('uncaught:exception', (err, runnable, promise) => {
      if (promise) {
        return false
      }
  });
    cy.get('[href="/moviesonwaras/products"] > .v-list-item__content').click();
    cy.get('#products-create-product-button').click();

      const generateUniqueProductNumber = () => {
       const randomNumber = Math.floor(Math.random() * 999) + 1;
      
      
      const uniqueProductNumber = String(randomNumber).padStart(3, '0');
      
      return uniqueProductNumber;
    };
    
    const productDetails = {
      productNumber: generateUniqueProductNumber(),
      productName: 'Table',
      productPrice: '220',
    };
    

    cy.get('input#product-editor-product-number-field').type(productDetails.productNumber);
    cy.get('input#product-editor-product-name-field').type(productDetails.productName);
    cy.get('input#product-editor-product-price-input').type(productDetails.productPrice);
    cy.get('#product-editor-product-type-selector').click();

    
    cy.get('div[role="listbox"] div.v-list-item').then(($items) => {
    const randomIndex = Math.floor(Math.random() * $items.length);
  
    cy.wrap($items[randomIndex]).click();


    {
    cy.get('.v-overlay__scrim').should('not.be.visible');
    cy.get('.v-list-item__title.text-14').click({multiple:true});
    cy.get('span.v-btn__content').contains('Opprett produkt').click();
}
    cy.get('.v-list-item__title').contains('Annen').click();

    cy.get('input.account-input').then(($input) => {
    if ($input.is(':visible')) {
        $input.type('3000');
    }
    cy.get('span.v-btn__content').contains('Opprett produkt').click();
  });
});
  });
});

