import { ui } from "./index.js";

export let allPokemons = [];

export function validateForm(e) {
    e.preventDefault();

    const searchTerm = document.querySelector('#term').value;

    if(searchTerm==='') {
        ui.showAlert('Agrega un término de búsqueda');
        return
    }

    searchPokemons(searchTerm);
}

export function searchPokemons(searchTerm) {
    
    ui.cleanHTML();

    allPokemons[0].forEach(pokemon => {
        // Search by partial name
        if (pokemon.name.indexOf(searchTerm) > -1) {

            // I consult the API to get the Pokémon's data
            fetch(pokemon.url)
                .then( res => res.json() )
                .then( data => {

                    // I exclude the cosmetic variants to only have the original Pokémon
                    if (data.is_default) {
                        
                        ui.showPokemon(data);
                    }
                });
        }
    });
}
