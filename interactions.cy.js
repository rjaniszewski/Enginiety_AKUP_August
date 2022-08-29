describe('Basics page interaction', () =>{
    beforeEach(() =>{
        cy.visit('http://localhost:3000/example-4');
    });

    it('Click and double click test', () => {
        cy.get('[data-cy="box-1-items-list"] > :nth-child(2)')
            .dblclick();

        cy.get('[data-cy="box-1-selected-name"]')
            .invoke('text')
            .should('equal', 'Option Two');
    });

    it('Checkbox test', () => {
        cy.get('[data-cy="box-2-checkboxes"] > :nth-child(1) input')
            .check();

        cy.get('[data-cy="box-2-selected-count"]')
            .invoke('text')
            .should('equal', '1');

        cy.get('[data-cy="box-2-checkboxes"] > :nth-child(2) input')
            .check();

        cy.get('[data-cy="box-2-selected-count"]')
            .invoke('text')
            .should('equal', '2');

            
        cy.get('[data-cy="box-2-checkboxes"] > :nth-child(3) input')
            .check();

        cy.get('[data-cy="box-2-selected-count"]')
            .invoke('text')
            .should('equal', '3');
    });

    it('Display correct select option', () => {
        cy.get('[data-cy=box-3-dropdown]')
            .select('Option Two')

        cy.get('[data-cy=box-3-selected-name]')
            .invoke('text')
            .should('equal', 'Option Two');       

    });

    it('Mouseover test', ()=> {
        cy.get('[data-cy="box-4-items-list"] > :nth-child(1)')
            .trigger('mouseover');

        cy.get('[data-cy=box-4-selected-name]')
            .invoke('text')
            .should('equal', 'Option One');
    });
});