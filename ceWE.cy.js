const url = 'http://localhost:3030/ceWeekEnd.html';

describe('Check valide form', () => {
  beforeEach(() => {
    cy.viewport(1400, 1000)
    cy.clearAllLocalStorage()
    cy.clearAllSessionStorage()
    cy.clearCookies()
    cy.visit(url);
  })

  it('cas passant - quand le formulaire est correct, popin succès', () => {
    cy.get('#nom').type('Brunet')
    cy.get('[data-cy="prenom"]').type('Etienne')
    cy.get('#ville').select('Awoingt');
    cy.get('#email').type('ebrunet@pstestware.fr');
    cy.get('#telephone').type('0651040404');
    cy.get('[data-cy="submit"]').click();
    cy.get('#modal-content').should('not.be.hidden');
    cy.get('#modal-content > p').should('have.text', 'Merci pour vos informations ! 🌟 Nous nous occupons de tout pour que vous puissiez vivre une expérience\n                inoubliable. 🌍 Votre prochaine destination de rêve sera bientôt prête. Restez à l\'écoute ! 🗺️');
  })

  it('cas non passant - nom non renseigné', () => {
    cy.get('[data-cy="prenom"]').type('Etienne');
    cy.get('#ville').select('Awoingt');
    cy.get('#email').type('ebrunet@pstestware.fr');
    cy.get('#telephone').type('0651040404');
    cy.get('[data-cy="submit"]').click();
    cy.get('#modal-content').should('be.hidden');
  })

  it('cas non passant - prénom non renseigné', () => {
    cy.get('#nom').type('Brunet');
    cy.get('#ville').select('Awoingt');
    cy.get('#email').type('ebrunet@pstestware.fr');
    cy.get('#telephone').type('0651040404');
    cy.get('[data-cy="submit"]').click();
    cy.get('#modal-content').should('be.hidden');
  })

  it('cas passant - email non renseigné', () => {
    cy.get('#nom').type('Brunet');
    cy.get('[data-cy="prenom"]').type('Etienne');
    cy.get('#ville').select('Awoingt');
    cy.get('#telephone').type('0651040404');
    cy.get('[data-cy="submit"]').click();
    cy.get('#modal-content').should('not.be.hidden');
    cy.get('#modal-content > p').should('have.text', 'Merci pour vos informations ! 🌟 Nous nous occupons de tout pour que vous puissiez vivre une expérience\n                inoubliable. 🌍 Votre prochaine destination de rêve sera bientôt prête. Restez à l\'écoute ! 🗺️');
  })

  it('cas passant - téléphone non renseigné', () => {
    cy.get('#nom').type('Brunet');
    cy.get('[data-cy="prenom"]').type('Etienne');
    cy.get('#ville').select('Awoingt');
    cy.get('#email').type('ebrunet@pstestware.fr');
    cy.get('[data-cy="submit"]').click();
    cy.get('#modal-content').should('not.be.hidden');
    cy.get('#modal-content > p').should('have.text', 'Merci pour vos informations ! 🌟 Nous nous occupons de tout pour que vous puissiez vivre une expérience\n                inoubliable. 🌍 Votre prochaine destination de rêve sera bientôt prête. Restez à l\'écoute ! 🗺️');
  })

  it('cas non passant - email et téléphone non renseigné', () => {
    cy.get('#nom').type('Brunet');
    cy.get('[data-cy="prenom"]').type('Etienne');
    cy.get('#ville').select('Awoingt');
    cy.get('[data-cy="submit"]').click();
    cy.get('#modal-content').should('not.be.hidden');
    cy.get('#modal-content').should('have.text', 'Veuillez remplir au moins l\'adresse email ou le numéro de téléphone.');
  })

  it('Quand on arrive, la modale n\'est pas affichée', () => {
    cy.get('#modal-content').should('be.hidden');
  })

  it('Le titre quand on arrive sur la page est correct', () => {
    cy.get('#titre').should('have.text', 'Ce week-end je m\'évade à ...')
  })

  it('le titre change bien quand on change de ville', () => {
    cy.get('#ville').select('Cambrai');
    cy.get('#titre').invoke('text').should('match', /Cambrai !$/);

    cy.get('#ville').select('Awoingt');
    cy.get('#titre').invoke('text').should('match', /Awoingt !$/);
  })
})
