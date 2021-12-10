import React from 'react'
// import noImage from '../img/no-image.jpg'

const PokemonCard = props => {

    const { result } = props;
    console.log(result)

    return (
        <>
            {result.map(pokemon => (
                <div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
                    <div class="bg-white bg-opacity-50 rounded-lg overflow-hidden shadow-md hover:bg-gray-100 transition duration-300 ease-in">
        
                        <img class="w-full p-5 img-pokeon" src={pokemon.img ? pokemon.img : pokemon.imgAlt} alt={pokemon.name} />
        
                        <div class="pb-4 text-center font-bold">
                            <p class=" uppercase"><span class="font-light">#{pokemon.id} </span>{pokemon.name}</p>
        
                            <div class="flex justify-around mt-5">
                                <div>
                                    <p>{pokemon.hp}K </p>
                                    <p class="font-light">Vida</p>
                                </div>
                                <div>
                                    <p>{pokemon.attak}K </p>
                                    <p class="font-light">Ataque</p>
                                </div>
                                <div>
                                    <p>{pokemon.defense}K </p>
                                    <p class="font-light">Defensa</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default PokemonCard
