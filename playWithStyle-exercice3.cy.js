const url='http://localhost:3030/playWithStyle.html';

describe('les éléments sont visibles', () => {
  beforeEach(() => {
    cy.visit(url);
  })

  //Exercice 3
  it('caraco visible > OK', () => {
    cy.get('[data-testid="caraco_imprime-22357"]').should('be.visible');
  })
  it('pantalon large beige non visible  > KO', () => {
    cy.get('[data-testid="pantalon_large_beige-26748"]').should('not.be.visible');
  })
  it('pantalon large beige caché  > KO', () => {
    cy.get('[data-testid="pantalon_large_beige-26748"]').should('be.hidden');
  })
})
