describe('Remplir formulaire et vérifier les valeurs', () => {
  it('Remplir le formulaire', () => {
    cy.visit('http://localhost:3030/playWithInputs.html');

    // Exercice 1
    cy.get('[data-cy="champs1"]').type('Bravo,');
    cy.get('[data-cy="textarea1"]').type('tu es');
    // par texte
    cy.get('[data-cy="select1"]').select('arrivé');
    // par value
    cy.get('[data-cy="select-multiple1"]').select(['2', '3']);
    cy.get('[data-cy="radio-opt2"]').check();
    cy.get('[data-cy="check-opt1"]').uncheck();
    cy.get('[data-cy="check-opt2"]').check();
    cy.get('[data-cy="check-opt3"]').check();
    cy.get('[data-cy="file1"]').selectFile("C:/ceWeekEnd/img/pull_blanc.jpg");

    // Exercice 2
    cy.get('[data-cy="champs1"]').should('have.value', 'Bravo,')
    cy.get('[data-cy="textarea1"]').should('have.value', 'tu es')
  
    cy.get('[data-cy="select1"]').should('have.value', '2');
    // Vérifie que la valeur du select multiple est [ '2', '3' ]
    cy.get('[data-cy="select-multiple1"]').invoke('val').should('deep.equal', ['2', '3']);

    cy.get('[data-cy="radio-opt1"]').should('not.be.checked');
    cy.get('[data-cy="radio-opt2"]').should('be.checked');
    cy.get('[data-cy="radio-opt3"]').should('not.be.checked');

    cy.get('[data-cy="check-opt1"]').should('not.be.checked');
    cy.get('[data-cy="check-opt2"]').should('be.checked');
    cy.get('[data-cy="check-opt3"]').should('be.checked');
  })
})
