import React, { useState } from 'react';
import PokemonCard from './PokemonCard';
import axios from 'axios';
import Alert from './Alert';

const Searcher = props => {
    // console.log(props)
    const [argument, setArgument] = useState(() => '');
    const [result, setResult] = useState(() => []);
    const [alert, setAlert] = useState({
        active: false,
        msg: ''
    });
    const { allPokemon } = props;
    let listPokemon = [];

    const readForm = e => {
        setArgument(e.target.value);
    }

    const find = e => {
        e.preventDefault();

        if (!argument) {
            setAlert({
                active: true,
                msg: 'Agrega un término de búsqueda'
            });

            setTimeout(() => {
                setAlert({
                    active: false,
                    msg: ''
                });
            }, 3000);
        }
        
        // I go through the list of Pokémon
        allPokemon.results.forEach(pokemon => {

            // Search by partial name
            if (pokemon.name.indexOf(argument) > -1) {

                // I consult the API to obtain the data of the Pokémon
                axios.get(pokemon.url)
                    .then((res) => {
                        
                        // I exclude the aesthetic variants to only have the original Pokémon
                        if (res.data.is_default) {

                            // I add the Pokémon's data to the list of results
                            listPokemon.push({
                                id: res.data.id,
                                name: res.data.name,
                                img: res.data.sprites.other.dream_world.front_default,
                                imgAlt: res.data.sprites.front_default,
                                hp: res.data.stats[0].base_stat,
                                attak: res.data.stats[1].base_stat,
                                defense: res.data.stats[2].base_stat
                            });
                        }

                    }).catch((err) => {
                        console.log(err)
                    });
            }
        });
        
        // I update the status of the list of Pokémon to show
        setResult(listPokemon);
        console.log(listPokemon);
        console.log(result);
    }

    return (
        <div>
            <div className="searcher max-w-lg mx-auto ">
                <form data-cy="form" onSubmit={find}>
                    <div>
                        <input 
                            type="text"
                            id="term"
                            name="term"
                            data-cy="text-input"
                            className="mt-3 rounded w-full p-2 "
                            placeholder="Ingresa el nombre a buscar. Ejemplo: Pikachu o Charizard"
                            onChange={readForm}
                        />

                        <input 
                            type="submit"
                            value="BUSCADOR POKÉMON"
                            data-cy="search-button"
                            className="mt-5 w-full py-2 bg-yellow-400 cursor-pointer font-bold hover:bg-yellow-500 rounded"
                        />   
                    </div>
                </form>
            </div>

            <Alert alert={alert}/>

            <div id="result" className="container mx-auto mt-10 flex flex-wrap">
                <PokemonCard result={result} />
            </div>

        </div>
    )
}

export default Searcher
