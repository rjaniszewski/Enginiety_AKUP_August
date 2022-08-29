describe('Text Box with Max Characters', () => {
    it('Display the appropiate remaining characters count', ()=> {
        cy.visit('http://localhost:3000/example-2');

        cy.get('span')
            .invoke('text')
            .should('equal', '15');

        cy.get('input').type('hello');
        cy.get('span')
            .invoke('text')
            .should('equal', '10');

        cy.get('input').type('qwertyuioplkjhg');
        cy.get('span')
            .invoke('text')
            .should('equal', '0');     
    });

    it('Prevents user from typing more than 15 characters', ()=> {
        cy.visit('http://localhost:3000/example-2');

        cy.get('input').type('qwerty2fdsfdfuioplkjhg');

        cy.get('input')
            .should('have.attr', 'value', 'qwerty2fdsfdfui'); 
    });


});