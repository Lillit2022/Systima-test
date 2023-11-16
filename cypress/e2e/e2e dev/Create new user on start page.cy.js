//const emailDigit = data.randomInteger(2, 20);
//const email = config.user.testEmail+emailDigit+ '@systima.no';

describe('User Registration', () => {
  it('Registers a new user', () => {
    cy.visit('https://app.dev.systima.no/login');

    cy.contains('Registrer deg').click();

    {const labelText = 'Fornavn *';
    const inputText = 'Karina';
    cy.contains('label', labelText).next().type('Karina'); 
  }

  {  
  const labelText = 'Etternavn *';
    const inputText = 'Marine';
    cy.contains('label', labelText).next().type('Marine'); 
  }
    
  {
    const labelText = 'Telefon nr.';
    const inputText = '+4588554111001';
    cy.contains('label', labelText).next().type('+4588554111001'); 
  }

  {
  const labelText = 'E-postadresse *';
  const inputText = 'liza+8@systima.no';
  cy.contains('label', labelText).next().type('liza+8@systima.no');
  }

  {
    const labelText = 'Passord *';
    const inputText = '123456789';
    cy.contains('label', labelText).next().type('123456789'); 
    }

    cy.get('input[role="checkbox"][aria-checked="false"]').check({ force: true });

    cy.get('button[type="submit"]').click();
   
  const searchQuery = 'G & G Servering AS';
  cy.contains('label', 'Finn ditt selskap etter navn eller organisasjonsnummer (9 siffer)').next().type(searchQuery);
  cy.contains('.v-list-item__content',(searchQuery)).click();

  const email = 'liza+22@systima.no';
  cy.contains('label', 'E-post *').next().type(email) 
  .should('have.value', email); 

  {
    const labelText = 'Telefon nr. *';
    const inputText = '+45699988874';
    cy.contains('label',labelText).next().type('+45699988874');
  }

  {  
  cy.contains('label','Hvor ofte skal firmaet levere mva. melding? *').next().click();
    const optionText = 'Annenhver måned';
    cy.get('.v-list-item__title'). contains(optionText).click(); 
    cy.contains('Opprett').click();
    cy.contains('label','E-post markedsføring').click();
    cy.contains('Fullfør').click();
  }

  cy.contains('button', 'Gå til dashboard').click({ force: true }); 

  
  });
});