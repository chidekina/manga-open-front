describe('Login na pagina', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
    cy.get('#pagina-de-cadastro').click()
    cy.get('[for="login"] > .rounded-3xl').type('usuario')
    cy.get('[for="password"] > .rounded-3xl').type('senha')
    cy.get('#entrar').click()
  })
})