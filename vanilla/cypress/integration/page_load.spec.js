/// <reference types="cypress" />

describe('Carga la página principal', () =>{
    it('Carga la página principal', () => {
        cy.visit('/');

        cy.get('[data-cy="proyect-title"]')
            .invoke('text')
            .should('equal', 'BUSCADOR DE POKÉMONS');
        
        cy.get('[data-cy="proyect-sentence"]')
            .invoke('text')
            .should('equal', 'El que quiere Pokémons, que los busque!');
            
        cy.get('[data-cy="text-input"]')
            .invoke('attr', 'placeholder')
            .should('equal', 'Ingresa el nombre a buscar. Ejemplo: Pikachu o Charizard');
            
        cy.get('[data-cy="search-button"]')
            .should('have.value', 'BUSCAR POKÉMON');

        cy.get('[data-cy="proyect-author"]')
            .invoke('text')
            .should('contain', 'Hecho por Braian Gonzales');
        
        cy.get('[data-cy="proyect-repo"]')
            .invoke('text')
            .should('contain', 'Link a mi repo');

    })
})