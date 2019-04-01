describe('Home Page', () => {
    context('Empty search result', () => {
        it('should get initial 50 films', () => {
            cy.visit('/');

            cy.get('li').should($film => {
                expect($film).to.have.length(50);
            });
        });

        it('accepts input', () => {
            const typedText = 'BlaBla';

            cy.get('input')
                .type(typedText)
                .should('have.value', typedText);
        });

        it('should show special text when no film to display', () => {
            cy.get('button').contains('Search').click();

            cy.get('p')               // 9.
                .should('contain', 'No films to display');
        });
    });

    context('Show search result', () => {
        it('should get initial 50 films', () => {
            cy.visit('/');

            cy.get('li').should($film => {
                expect($film).to.have.length(50);
            });
        });

        it('accepts input', () => {
            const typedText = 'War';

            cy.get('input')
                .type(typedText)
                .should('have.value', typedText);
        });

        it('should show search result by query', () => {
            cy.get('button').contains('Search').click();

            cy.get('li').should($film => {
                expect($film).to.not.have.length(0);
            });
        });
    });
});
