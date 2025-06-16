describe('Login na pagina', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
    cy.get('#pagina-de-cadastro').click()
    cy.get('[for="login"] > .rounded-3xl').type('meuprincipe@gmail.com')
    cy.get('[for="password"] > .rounded-3xl').type('claive123')
    cy.get('#entrar').click()
  })
})