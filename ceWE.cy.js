const url = 'http://localhost:3030/ceWeekEnd.html';

const FakeUser = require('../utils/FakeUser');

describe('Vérification du formulaire ce week-end', () => {
  beforeEach(() => {
    cy.viewport(1400, 1000);
    cy.clearCookies();
    cy.visit(url);
  })

  it.only('cas passant - quand le formulaire est correct, popin succès', () => {
    let fakeUser = new FakeUser();
    cy.get('#nom').type(fakeUser.nom)
    cy.get('[data-cy="prenom"]').type(fakeUser.prenom)
    cy.get('#ville').select('Awoingt');
    cy.get('#email').type(fakeUser.email);
    cy.get('#telephone').type(fakeUser.telephone);
    cy.get('[data-cy="submit"]').click();
    cy.get('#modal-content').should('not.be.hidden');
    cy.get('#modal-content > p').should('have.text', 'Merci pour vos informations ! 🌟 Nous nous occupons de tout pour que vous puissiez vivre une expérience\n                inoubliable. 🌍 Votre prochaine destination de rêve sera bientôt prête. Restez à l\'écoute ! 🗺️');
  })

  it('cas non passant - nom non renseigné', () => {
    let fakeUser = new FakeUser();
    cy.get('[data-cy="prenom"]').type(fakeUser.prenom);
    cy.get('#ville').select('Awoingt');
    cy.get('#email').type(fakeUser.email);
    cy.get('#telephone').type(fakeUser.telephone);
    cy.get('[data-cy="submit"]').click();
    cy.get('#modal-content').should('be.hidden');
  })

  it('cas non passant - prénom non renseigné', () => {
    let fakeUser = new FakeUser();
    cy.get('#nom').type(fakeUser.nom);
    cy.get('#ville').select('Awoingt');
    cy.get('#email').type(fakeUser.email);
    cy.get('#telephone').type(fakeUser.telephone);
    cy.get('[data-cy="submit"]').click();
    cy.get('#modal-content').should('be.hidden');
  })

  it('cas passant - email non renseigné', () => {
    let fakeUser = new FakeUser();
    cy.get('#nom').type(fakeUser.nom);
    cy.get('[data-cy="prenom"]').type(fakeUser.prenom);
    cy.get('#ville').select('Awoingt');
    cy.get('#telephone').type(fakeUser.telephone);
    cy.get('[data-cy="submit"]').click();
    cy.get('#modal-content').should('not.be.hidden');
    cy.get('#modal-content > p').should('have.text', 'Merci pour vos informations ! 🌟 Nous nous occupons de tout pour que vous puissiez vivre une expérience\n                inoubliable. 🌍 Votre prochaine destination de rêve sera bientôt prête. Restez à l\'écoute ! 🗺️');
  })

  it('cas passant - téléphone non renseigné', () => {
    let fakeUser = new FakeUser();
    cy.get('#nom').type(fakeUser.nom);
    cy.get('[data-cy="prenom"]').type(fakeUser.prenom);
    cy.get('#ville').select('Awoingt');
    cy.get('#email').type(fakeUser.email);
    cy.get('[data-cy="submit"]').click();
    cy.get('#modal-content').should('not.be.hidden');
    cy.get('#modal-content > p').should('have.text', 'Merci pour vos informations ! 🌟 Nous nous occupons de tout pour que vous puissiez vivre une expérience\n                inoubliable. 🌍 Votre prochaine destination de rêve sera bientôt prête. Restez à l\'écoute ! 🗺️');
  })

  it('cas non passant - email et téléphone non renseigné', () => {
    let fakeUser = new FakeUser();
    cy.get('#nom').type(fakeUser.nom);
    cy.get('[data-cy="prenom"]').type(fakeUser.prenom);
    cy.get('#ville').select('Awoingt');
    cy.get('[data-cy="submit"]').click();
    cy.get('#modal-content')
      .should('not.be.hidden')
      .and('have.text', 'Veuillez remplir au moins l\'adresse email ou le numéro de téléphone.');
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
