import { useEffect, useState } from "react";

export default function PokemonData() {
    const [pokemonData, setPokemonData] = useState({})

    // First fetch call for 10 Pokemon, name + url (array of objects) | nested API
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
            .then(response => response.json())
            .then(function (allpokemon) {
                console.log(allpokemon)
                allpokemon.results.forEach(function (pokemon) {
                    FetchPokemonData(pokemon)
                })
            })
    }, [])
    function FetchPokemonData(pokemon) {
        let url = pokemon.url

        // Second fetch call to get individual Pokemon data (type, number, etc)
        fetch(url)
            .then(response => response.json())
            .then(data => setPokemonData(data))
    }
    return (
        <div>
            <h1>Hello world</h1>
            <pre>{JSON.stringify(pokemonData.name, null, 2)}</pre>
        </div>
    )
}
