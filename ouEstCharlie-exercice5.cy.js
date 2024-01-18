const url = 'http://localhost:3030/ouEstCharlie.html'
const txt = '#child-2';


describe('Remplir formulaire et vérifier les valeurs', () => {
    
    beforeEach(() => {
        cy.visit(url);
    })
            
    it('Le texte contient Charlie', () => {
        cy.get(txt).should('contain', 'Charlie')
    })

    it('Le texte est Charlie', () => {
        cy.get(txt).should('have.text', 'Charlie')
    })

    it('Le texte contient un terme', () => {
        cy.get(txt).should('include.text', 'Fiona');
        cy.get(txt).invoke('text').should('match', /Fiona/);
    })

    it('Le texte commence par Charlie', () => {
        // Le texte commence par
        cy.get(txt).invoke('text').should('match', /^Charlie/);
    })

    it('Le texte fini par partager', () => {
        // Le texte fini par
        cy.get(txt).invoke('text').should('match', /partager$/);
    })
})
