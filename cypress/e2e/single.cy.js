/// <reference types="cypress" />

describe('test calendar', () => {
  it('has the right number of empty days', () => {
    cy.visit('/kalendar-2022-srb.php')
    cy.get('.months-container').should('have.css', 'opacity', '1')

    let total = 0
    cy.get('table.month')
      .each(($table) => {
        const name = $table.find('.month-title').text()
        const empty = $table.find('tbody td:empty').length
        cy.log(`The number of empty fields is ${empty} for month ${name}`)
        total += empty
      })
      .then(() => {
        // we can use the total value only AFTER it was computed
        cy.get('td.day.new, td.day.old')
          .should('be.visible')
          .its('length')
          .should('equal', total)
      })
  })
})
