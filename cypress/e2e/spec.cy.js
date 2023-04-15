/// <reference types="cypress" />

describe('test calendart', () => {
  beforeEach(() => {
    cy.visit('/kalendar-2022-srb.php')
  })

  it('Find and print how many empty fields there are for each month', () => {
    Cypress.env('total', 0)
    cy.get('table.month').each(($tables) => {
      const name = $tables.find('.month-title').text()
      const empty = $tables.find('tbody td:empty').length
      cy.log(`The number of empty fields is ${empty} for month ${name}`)
      Cypress.env('total', Cypress.env('total') + empty)
    })
  })

  it('Count and print how many empty fields there are for entire year', () => {
    cy.get('td.day.new,td.day.old')
      .should('be.visible')
      .its('length')
      .should('equal', Cypress.env('total'))
  })
})
