import { allPokemons, searchPokemons, validateForm } from "../js/functions.js";
import { form, activeAlert, divResult } from "../js/selectors.js";


describe('Prueba de Selectores', () => {

    test('Se encontró el div del Formulario', () => {
        expect(form).not.toBeNull();
    });

    test('Se encontró el div de Alerta', () => {
        expect(activeAlert).not.toBeNull();
    });

    test('Se encontró el div de Resultado', () => {
        expect(divResult).not.toBeNull();
    });
});

describe('Prueba de Funciones', () => {

    test('Se encontró el div del Formulario', () => {
        expect( validateForm() ).not.toBeNull();
    });

    test('Se encontró el div de Alerta', () => {
        expect( searchPokemons() ).not.toBeNull();
    });

    test('Se encontró el div de Resultado', () => {
        expect(divResult).not.toBeNull();
    });
    
    test('No se encontraron Pokémons', () => {
        expect(allPokemons).toHaveLength(0);
    });
});