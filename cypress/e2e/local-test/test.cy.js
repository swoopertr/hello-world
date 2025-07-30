describe('local ligin app', () => {
     beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

it('enter email', () => {
    cy.get('#emailInput').type(`bbbbbbb@ddd.com`);
    cy.get('#passwordInput').type(`23456789`);
    cy.get('#checkboxInput').click();
    cy.get('#btnSubmit').click();
    cy.location('href').should('contain', '/success')
})

})