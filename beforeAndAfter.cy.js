describe('Campagne de test before and after', () => {
    // Est exécuté dès qu'on rentre dans describe()
    before(() => {
        console.log('Début des tests')
    })

    // Est exécuté avant chaque test > it()
    beforeEach(() => {
        console.log('Démarrage du test')
    })

    // Est exécuté quand tous les tests sont finis
    after(() => {
        console.log('La campagne de test est finie')
    })

    // Est exécuté après chaque test > it()
    afterEach(() => {
        console.log('Fin du test')
    })

    it('TEST 1 > OK', () => {
        expect(true).to.equal(true);
    })

    it('TEST 2 > KO', () => {
        expect(true).to.equal(false);
    })
})


