import React from 'react'
// import noImage from '../img/no-image.jpg'

const PokemonCard = props => {

    const { result } = props;
    console.log(result)

    return (
        <>
            {result.map(pokemon => (
                <div className="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4" key={pokemon.id}>
                    <div className="bg-white bg-opacity-50 rounded-lg overflow-hidden shadow-md hover:bg-gray-100 transition duration-300 ease-in">
        
                        <img className="w-full p-5 img-pokeon" src={pokemon.img ? pokemon.img : pokemon.imgAlt} alt={pokemon.name} />
        
                        <div className="pb-4 text-center font-bold">
                            <p className=" uppercase"><span className="font-light">#{pokemon.id} </span>{pokemon.name}</p>
        
                            <div className="flex justify-around mt-5">
                                <div>
                                    <p>{pokemon.hp}K </p>
                                    <p className="font-light">Vida</p>
                                </div>
                                <div>
                                    <p>{pokemon.attak}K </p>
                                    <p className="font-light">Ataque</p>
                                </div>
                                <div>
                                    <p>{pokemon.defense}K </p>
                                    <p className="font-light">Defensa</p>
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
