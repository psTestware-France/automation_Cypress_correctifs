const url='http://localhost:3030/playWithStyle.html';

describe('template spec', () => {
  beforeEach(() => {
    cy.visit(url);
  })
  it('caraco visible > OK', () => {
    cy.get('[data-testid="caraco_imprime-22357"]').should('be.visible');
  })
  it('pantalon large beige non visible  > KO', () => {
    cy.get('[data-testid="pantalon_large_beige-26748"]').should('not.be.visible');
  })
  it('pantalon large beige caché  > KO', () => {
    cy.get('[data-testid="pantalon_large_beige-26748"]').should('be.hidden');
  })


  it.only('la modale n\'est visible qu\'après le clic et disparait 5 sec plus tard > OK', () => {
    cy.get('#modal-content').should('exist')
                            .and('not.be.visible')
                            .and('have.css', 'background-color', 'rgb(255, 255, 255)');

    cy.get('[data-cy="submit"]').click();

    cy.get('#modal-content').should('be.visible');
    cy.get('#modal-content').should('have.css', 'background-color', 'rgb(255, 255, 255)');

    cy.get('#modal-content')
      .should('be.visible')
      .and('have.css', 'background-color', 'rgb(255, 255, 255)');

    cy.get('#modal-content', { timeout: 5000 }).should('not.be.visible');

    cy.get('[data-cy="submit"]').click();
    cy.wait(1000);
    cy.get('#modal-content').should('not.be.visible');
  })
})