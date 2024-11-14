const url = 'http://localhost:3030/ceWeekEnd.html';

const FakeUser = require('../utils/FakeUser');



async function getVille() {
  let ville = '';
  const apiUrl = 'https://geo.api.gouv.fr/departements/59/communes';

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const randomCityIndex = Math.floor(Math.random() * data.length);
    ville = data[randomCityIndex].nom;
    console.log(ville); // Affiche le nom de la ville
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error);
  }

  return ville;
}

describe('Vérification du formulaire ce week-end', () => {
  beforeEach(() => {
    cy.viewport(1400, 1000);
    cy.clearCookies();
    cy.visit(url);
  })

  it('cas passant - quand le formulaire est correct, popin succès', () => {
    let fakeUser = new FakeUser();
    cy.get('#nom').type(fakeUser.nom)
    cy.get('[data-testid="prenom"]').type(fakeUser.prenom)
    cy.wrap(getVille()).then(ville => {
      cy.get('#ville').select(ville);
    });
    
    cy.get('#email').type(fakeUser.email);
    cy.get('#telephone').type(fakeUser.telephone);
    cy.get('[data-testid="submit"]').click();
    cy.get('#modal-content').should('not.be.hidden');
    cy.get('#modal-content > p').should('have.text', 'Merci pour vos informations ! 🌟 Nous nous occupons de tout pour que vous puissiez vivre une expérience\n                inoubliable. 🌍 Votre prochaine destination de rêve sera bientôt prête. Restez à l\'écoute ! 🗺️');
  })

  it('cas non passant - nom non renseigné', () => {
    let fakeUser = new FakeUser();
    cy.get('[data-testid="prenom"]').type(fakeUser.prenom);
    cy.get('#ville').select('Awoingt');
    cy.get('#email').type(fakeUser.email);
    cy.get('#telephone').type(fakeUser.telephone);
    cy.get('[data-testid="submit"]').click();
    cy.get('#modal-content').should('be.hidden');
  })

  it('cas non passant - prénom non renseigné', () => {
    let fakeUser = new FakeUser();
    cy.get('#nom').type(fakeUser.nom);
    cy.get('#ville').select('Awoingt');
    cy.get('#email').type(fakeUser.email);
    cy.get('#telephone').type(fakeUser.telephone);
    cy.get('[data-testid="submit"]').click();
    cy.get('#modal-content').should('be.hidden');
  })

  it('cas passant - email non renseigné', () => {
    let fakeUser = new FakeUser();
    cy.get('#nom').type(fakeUser.nom);
    cy.get('[data-testid="prenom"]').type(fakeUser.prenom);
    cy.get('#ville').select('Awoingt');
    cy.get('#telephone').type(fakeUser.telephone);
    cy.get('[data-testid="submit"]').click();
    cy.get('#modal-content').should('not.be.hidden');
    cy.get('#modal-content > p').should('have.text', 'Merci pour vos informations ! 🌟 Nous nous occupons de tout pour que vous puissiez vivre une expérience\n                inoubliable. 🌍 Votre prochaine destination de rêve sera bientôt prête. Restez à l\'écoute ! 🗺️');
  })

  it('cas passant - téléphone non renseigné', () => {
    let fakeUser = new FakeUser();
    cy.get('#nom').type(fakeUser.nom);
    cy.get('[data-testid="prenom"]').type(fakeUser.prenom);
    cy.get('#ville').select('Awoingt');
    cy.get('#email').type(fakeUser.email);
    cy.get('[data-testid="submit"]').click();
    cy.get('#modal-content').should('not.be.hidden');
    cy.get('#modal-content > p').should('have.text', 'Merci pour vos informations ! 🌟 Nous nous occupons de tout pour que vous puissiez vivre une expérience\n                inoubliable. 🌍 Votre prochaine destination de rêve sera bientôt prête. Restez à l\'écoute ! 🗺️');
  })

  it('cas non passant - email et téléphone non renseigné', () => {
    let fakeUser = new FakeUser();
    cy.get('#nom').type(fakeUser.nom);
    cy.get('[data-testid="prenom"]').type(fakeUser.prenom);
    cy.get('#ville').select('Awoingt');
    cy.get('[data-testid="submit"]').click();
    cy.get('#modal-content')
      .should('not.be.hidden')
      .and('have.text', 'Veuillez remplir au moins l\'adresse email ou le numéro de téléphone.');
  })

  it('Quand on arrive, la modale n\'est pas affichée', () => {
    cy.get('#modal-content').should('be.hidden');
  })

  it('Le titre quand on arrive sur la page est correct', () => {
    cy.get('#titre').should('have.text', 'Ce week-end je m\'évade à ...')
    cy.get('#titre').invoke('text').should('match', /^Ce week-end je m\'évade à/)
    cy.get('#titre').invoke('text').should('to.match', /^Ce week-end je m\'évade à/)
  })

  it('le titre change bien quand on change de ville', () => {
    cy.get('#ville').select('Cambrai');
    cy.get('#titre').invoke('text').should('match', /^Ce week-end je m\'évade à Cambrai !$/);

    cy.get('#ville').select('Awoingt');
    cy.get('#titre').should('have.text', 'Ce week-end je m\'évade à Awoingt !');
  })
})
