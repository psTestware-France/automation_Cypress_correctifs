const url = 'http://localhost:3030/ouEstCharlie.html'
const txt = '#child-2';

describe('Tests de la page où est Charlie', () => {

    beforeEach(() => {
        cy.visit(url);
    })
  
    it('Le texte contient Charlie', () => {
        cy.get(txt).should('contain', 'Charlie');
    })

    it('Le texte est Charlie', () => {
        cy.get(txt).should('have.text', 'Charlie');
        cy.get(txt).invoke('text').should('to.match', /^Charlie$/);
    })

    it.only('Le texte contient un terme', () => {
        cy.get(txt).should('include.text', 'Fiona, la musicienne');
        cy.get(txt).invoke('text').should('to.match', /Fiona, la musicienne/);
        cy.get(txt).should('contain', 'Fiona, la musicienne');
        cy.contains(txt, /Fiona, la muscienne/); // Attention, ceci n'est pas une assertion explicite !
    })

    it('Le texte commence par Charlie', () => {
        // Le texte commence par
        cy.get(txt).invoke('text').should('to.match', /^Charlie/);
    })

    it('Le texte fini par partager', () => {
        // Le texte fini par
        cy.get(txt).invoke('text').should('to.match', /partager$/);
    })
})