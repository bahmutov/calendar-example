/// <reference types="cypress" />

describe('test calendar', () => {
  it('Count and print how many empty fields there are for entire year', () => {
    cy.visit('/kalendar-2022-srb.php')
    cy.get('.months-container').should('have.css', 'opacity', '1')
    cy.get('td.day.new, td.day.old')
      .should('be.visible')
      .its('length')
      .then((n) => {
        cy.log(`The number of empty fields is ${n}`)
      })
  })
})
