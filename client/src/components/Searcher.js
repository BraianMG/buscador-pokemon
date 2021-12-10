import React, { useEffect, useState } from 'react';
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

    useEffect(() => {
        setResult(listPokemon);
    }, []);

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
        
        // Recorro la lista de Pokémon
        allPokemon.results.forEach(pokemon => {

            // Búsqueda por nombre parcial
            if (pokemon.name.indexOf(argument) > -1) {

                // Consulto la API para obtener los datos del Pokémon
                axios.get(pokemon.url)
                    .then((res) => {
                        
                        // Excluyo las variantes estéticas para solo tener los Pokémon originales
                        if (res.data.is_default) {

                            // Agrego los datos del Pokémon a la lista de resultados
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
        
        // Actualizo el estado de la lista de Pokémon a mostrar
        setResult(listPokemon);
        console.log(listPokemon);
        console.log(result);
    }

    return (
        <div>
            <div class="searcher max-w-lg mx-auto ">
                <form onSubmit={find}>
                    <div>
                        <input 
                            type="text"
                            id="term"
                            name="term"
                            class="mt-3 rounded w-full p-2 "
                            placeholder="Ingresa el nombre a buscar. Ejemplo: Pikachu o Charizard"
                            onChange={readForm}
                        />

                        <input 
                            type="submit"
                            value="Buscar Pokémon"
                            class="mt-5 w-full py-2 bg-yellow-400 cursor-pointer font-bold uppercase hover:bg-yellow-500 rounded"
                        />   
                    </div>
                </form>
            </div>

            <Alert alert={alert}/>

            <div id="result" class="container mx-auto mt-10 flex flex-wrap">
                <PokemonCard result={result} />
            </div>

        </div>
    )
}

export default Searcher
