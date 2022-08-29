describe('Text Box with Max Characters', () => {
    it('Display the appropiate remaining characters count', ()=> {
        cy.visit('http://localhost:3000/example-3');

        cy.get('[data-cy="last-name-chars-left-count"]')
            .invoke('text')
            .should('equal', '15');

        cy.get('[data-cy="input-last-name"]').type('hello');
        cy.get('[data-cy="last-name-chars-left-count"]')
            .invoke('text')
            .should('equal', '10');

        cy.get('[data-cy="input-last-name"]').type('qwertyuioplkjhg');
        cy.get('[data-cy="last-name-chars-left-count"]')
            .invoke('text')
            .should('equal', '0');     
    });

    it('Prevents user from typing more than 15 characters', ()=> {
        cy.visit('http://localhost:3000/example-3');

        cy.get('[data-cy="input-last-name"]').type('qwerty2fdsfdfuioplkjhg');

        cy.get('[data-cy="input-last-name"]')
            .should('have.attr', 'value', 'qwerty2fdsfdfui'); 
    });


});