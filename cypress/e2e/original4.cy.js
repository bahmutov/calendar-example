describe('test calendar', () => {
  it('Find and print how many empty fields there are for each month', () => {
    cy.visit('/kalendar-2022-srb.php')
    cy.get('.months-container').should('have.css', 'opacity', '1')
    cy.get('table.month').each(($table) => {
      const name = $table.find('.month-title').text()
      const empty = $table.find('tbody td:empty').length
      cy.log(`month ${name} has ${empty} empty days`)
    })
  })
})
