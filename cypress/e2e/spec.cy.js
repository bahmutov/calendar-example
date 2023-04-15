/// <reference types="cypress" />

describe('test calendart', () => {
  beforeEach(() => {
    cy.visit('/kalendar-2022-srb.php')
  })

  it('Find and print how many empty fields there are for each month', () => {
    cy.visit('/kalendar-2022-srb.php')
    Cypress.env('total', 0)
    cy.get('table').each(($tables) => {
      const name = $tables.find('.month-title').text()
      const empty = $tables.find('tbody td:empty').length
      cy.log(`The number of empty fields is ${empty} for month ${name}`)
      Cypress.env('total', Cypress.env('total') + empty)
    })
  })

  it('Count and print how many empty fields there are for entire year', () => {
    cy.visit('/kalendar-2022-srb.php')
    cy.get('td.day.new').its('length').as('new')
    cy.get('td.day.old')
      .its('length')
      .as('old')
      .then(function () {
        expect(this.new + this.old, 'year to month').to.equal(
          Cypress.env('total'),
        )
      })
  })
})
