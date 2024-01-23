describe('Check API communes', () => {

    it('Response status OK', () => {
        cy.request({
            method: 'GET',
            url: 'https://geo.api.gouv.fr/departements/59/communes',
          }).then((response) => {
            // Assertions sur la réponse de l'API
            expect(response.status).to.equal(200);
          })
    })

    it('La réponse n\'est pas vide', () => {
        cy.request({
            method: 'GET',
            url: 'https://geo.api.gouv.fr/departements/59/communes',
          }).then((response) => {
            // Assertions sur la réponse de l'API
            expect(response.status).to.equal(200);

            // Vérifie que la liste des communes n'est pas vide
            expect(response.body).not.to.be.empty;
          })
    })

    it('Le premier résultat est correct', () => {
        cy.request({
            method: 'GET',
            url: 'https://geo.api.gouv.fr/departements/59/communes',
          }).then((response) => {
            // Assertions sur la réponse de l'API
            expect(response.status).to.equal(200);

            // Vérifie que la liste des communes n'est pas vide
            expect(response.body).to.be.an('array').and.not.to.be.empty;

            // Vérifie que le premier résultat correspond aux données spécifiées
            const expectedFirstResult = {
                "nom": "Abancourt",
                "code": "59001",
                "codeDepartement": "59",
                "siren": "215900010",
                "codeEpci": "200068500",
                "codeRegion": "32",
                "codesPostaux": [
                "59268"
                ],
                "population": 468
            };

            expect(response.body[0]).to.deep.equal(expectedFirstResult);
          })
    })

    it('Le premier nom de ville est correct', () => {
        cy.request({
            method: 'GET',
            url: 'https://geo.api.gouv.fr/departements/59/communes',
          }).then((response) => {
            // Assertions sur la réponse de l'API
            expect(response.status).to.equal(200);

            // Vérifie que la liste des communes n'est pas vide
            expect(response.body).to.be.an('array').and.not.to.be.empty;

            const expectedNom = "Abancourt";
      
            expect(response.body[0].nom).to.equal(expectedNom);
          })
    })
})