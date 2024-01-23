const url = 'http://localhost:3030/ouEstCharlie.html'
const child = cy.get('#child-2');


describe('Où est Charlie ?', () => {
    
    beforeEach(() => {
        cy.visit(url);
    })
            
    it('Le texte contient Charlie', () => {
        cyElem.should('contain', 'Charlie')
    })

    it('Le texte est Charlie', () => {
        cyElem.should('have.text', 'Charlie')
    })

    it('Le texte contient un terme', () => {
        cyElem.should('include.text', 'Fiona');
        cyElem.invoke('text').should('match', /Fiona/);
    })

    it('Le texte commence par Charlie', () => {
        // Le texte commence par
        cyElem.invoke('text').should('match', /^Charlie/);
    })

    it('Le texte fini par partager', () => {
        // Le texte fini par
        cyElem.invoke('text').should('match', /partager$/);
    })
})


const cyElem = '#element';

describe('Où est Charlie ?', () => {
    it('Le texte contient Charlie', () => {
        cy.get(cyElem).should('contain', 'Charlie')
    })
})

