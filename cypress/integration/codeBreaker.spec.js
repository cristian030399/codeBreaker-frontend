describe('Test codeBreaker', () => {
    it('guessCharacterGenericException', () => {
        cy.visit('/');
        cy.get('#input-nuevo-codigo-oculto').type('1234');
        cy.get('#boton-cambiar-codigo-oculto').click();
        cy.get('#input-codigo-adivinado').type('1234')
            .should('have.value', '1234');
        cy.get('#boton-adivinar').click();
        cy.get('#input-resultado').should('have.value', 'XXXX');

        cy.get('#input-codigo-adivinado').clear();
        cy.get('#input-codigo-adivinado').type('1245')
            .should('have.value', '1245');
        cy.get('#boton-adivinar').click();
        cy.get('#input-resultado').should('have.value', 'XX_');

        cy.get('#boton-activar-cambiar-codigo-oculto').click();
        cy.get('#input-nuevo-codigo-oculto').type('9876');
        cy.get('#boton-cambiar-codigo-oculto').click();
        cy.get('#input-codigo-adivinado').clear();
        cy.get('#input-codigo-adivinado').type('1245')
            .should('have.value', '1245');
        cy.get('#boton-adivinar').click();
        cy.get('#input-resultado').should('have.value', '');

        cy.get('#input-codigo-adivinado').clear();
        cy.get('#input-codigo-adivinado').type('6789')
            .should('have.value', '6789');
        cy.get('#boton-adivinar').click();
        cy.get('#input-resultado').should('have.value', '____');

        cy.get('#input-codigo-adivinado').clear();
        cy.get('#input-codigo-adivinado').type('7896')
            .should('have.value', '7896');
        cy.get('#boton-adivinar').click();
        cy.get('#input-resultado').should('have.value', 'XX__');
    });
});