
class LoginPage {
  constructor() {}

  LoginIn(email, password) {
    cy.get('div.v-input__slot input[name="email"]').type(email);
    cy.get('div.v-input__slot input[name="password"]').type(password);
    cy.get('.v-form > .d-flex > .v-btn').click()
  }
 }
 export default LoginPage;
