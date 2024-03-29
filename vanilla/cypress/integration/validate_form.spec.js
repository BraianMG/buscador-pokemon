/// <reference types="cypress" />

describe('Valida el formulario', () => {
    it('Submit al formulario y mostrar la alerta de error', () => {
        cy.visit('/');

        cy.get('[data-cy="form"]')
            .submit();

        cy.get('[data-cy="form"]')
            .invoke('text')
            .should('contain', 'Error: Agrega un término de búsqueda');
    })
})