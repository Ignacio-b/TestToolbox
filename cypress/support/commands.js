// ***********************************************
// Este archivo commands.js muestra cómo crear
// varios comandos personalizados y sobrescribir
// comandos existentes.
//
// Para ejemplos más completos de comandos
// personalizados, lee más aquí:
// https://on.cypress.io/custom-commands
// ***********************************************

// -- Este es un comando principal --
Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login')
  cy.get('input[data-qa="login-email"]').type(email)
  cy.get('input[data-qa="login-password"]').type(password)
  cy.get('button[data-qa="login-button"]').click()
})

// -- Este es un comando secundario --
Cypress.Commands.add('register', (name, email, password) => {
  cy.visit('/signup')
  cy.get('input[data-qa="signup-name"]').type(name)
  cy.get('input[data-qa="signup-email"]').type(email)
  cy.get('button[data-qa="signup-button"]').click()
  cy.get('input[data-qa="password"]').type(password)
  cy.get('input[data-qa="first_name"]').type('Test')
  cy.get('input[data-qa="last_name"]').type('User')
  cy.get('input[data-qa="address"]').type('Test Address')
  cy.get('input[data-qa="state"]').type('Test State')
  cy.get('input[data-qa="city"]').type('Test City')
  cy.get('input[data-qa="zipcode"]').type('12345')
  cy.get('input[data-qa="mobile_number"]').type('1234567890')
  cy.get('button[data-qa="create-account"]').click()
}) 