describe('Text Box with Max Characters', () => {
    it('Display the appropiate remaining characters count', ()=> {
        cy.visit('http://localhost:3000/example-3');

        cy.get('[data-cy="last-name-chars-left-count"]')
            .as('charLeftSpan');
        cy.get('[data-cy="input-last-name"]')
            .as('lastName');

        cy.get('@charLeftSpan')
            .invoke('text')
            .should('equal', '15');

        cy.get('@lastName').type('hello');
        cy.get('@charLeftSpan')
            .invoke('text')
            .should('equal', '10');

        cy.get('@lastName').type('qwertyuioplkjhg');
        cy.get('@charLeftSpan')
            .invoke('text')
            .should('equal', '0');     
    });

    it('Prevents user from typing more than 15 characters', ()=> {
        cy.visit('http://localhost:3000/example-3');

        cy.get('[data-cy="input-last-name"]')
        .as('lastName');
        
        cy.get('@lastName').type('qwerty2fdsfdfuioplkjhg');

        cy.get('@lastName')
            .should('have.attr', 'value', 'qwerty2fdsfdfui'); 
    });


});