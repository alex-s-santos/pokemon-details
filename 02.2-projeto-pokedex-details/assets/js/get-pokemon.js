

const pokeApi = {};

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json())
}

pokeApi.getPokemons = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10';

    return fetch(url)
        .then((reponse) => reponse.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
}
pokeApi.getPokemons();