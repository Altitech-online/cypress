import { Given, When, Then, Before } from "cypress-cucumber-preprocessor/steps";

Before(() => {
  cy.visit('/')
})

Given('I open the app', () => {
 
})
Then('I see {string} in the h1', (title) => {
  cy.get('.header').should('contain', title)
})

Given('I typed {string}', (string) => {
  cy.get('input').type(string)
})
When('I click the button', () => {
  cy.get('button').contains('test').click()
})
Then('I see {string} in the paragraph', (string) => {
  cy.get('p').should('be.visible').and('contain', string)
})
