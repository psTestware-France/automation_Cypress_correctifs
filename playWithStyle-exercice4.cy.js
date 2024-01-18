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

  // Exercice 4
  it('la modale n\'est visible qu\'après le clic et disparait 5 sec plus tard > OK', () => {
    cy.get('#modal-content').should('exist').and('not.be.visible');
    cy.get('[data-cy="submit"]').click();
    cy.get('#modal-content').should('be.visible');
    cy.get('#modal-content').should('have.css', 'background-color', 'rgb(255, 255, 255)')
    cy.wait(6000);
    cy.get('#modal-content').should('not.be.visible');
  })
})
