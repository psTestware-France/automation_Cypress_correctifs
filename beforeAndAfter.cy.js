describe('Campagne de test before and after', () => {
    // Est exécuté dès qu'on rentre dans describe()
    before(() => {
        cy.log('Début des tests')
    })

    // Est exécuté avant chaque test > it()
    beforeEach(() => {
        cy.log('Démarrage du test')
    })

    // Est exécuté quand tous les tests sont finis
    after(() => {
        cy.log('La campagne de test est finie')
    })

    // Est exécuté après chaque test > it()
    afterEach(() => {
        cy.log('Fin du test')
    })

    it('TEST 1 > OK', () => {
        expect(true).to.equal(true);
    })

    it.skip('TEST 2 > KO', () => {
        expect(true).to.equal(false);
    })
    
    it('TEST 3 > OK', () => {
        expect(true).to.equal(true);
    })
})


