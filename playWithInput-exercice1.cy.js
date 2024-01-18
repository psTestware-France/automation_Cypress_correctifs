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
  })
})
