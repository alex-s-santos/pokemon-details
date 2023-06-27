let id = 1;
const details = document.querySelector('#details');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

prev.addEventListener('click', function() { 
    if(id <= 1) {

        alert('Este é o primeiro pokemon, tente ir para frete');
        id = 1;
    
    } else {

        id = id - 1;
    }
    console.log(id)
    return id;
});

next.addEventListener('click', function() {
    if(id >= 1010) {

        alert('Esse é o último pokemon da lista, tente voltar');
        id = 1010;
    } else {
        
        id = id + 1;
    }
    console.log(id)
    return id;
});

const url = `https://pokeapi.co/api/v2/pokemon/${id}`;


const novoPokemon = {};

function criarPokemon(pokemon) {
    novoPokemon.photo = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${ajustarId(id)}.png`,
    novoPokemon.id = `#${pokemon.id}`,
    novoPokemon.name = pokemon.name,
    novoPokemon.type = pokemon.types[0].type.name,
    novoPokemon.move = pokemon.moves[0].move.name,
    novoPokemon.hp = pokemon.stats[0].base_stat,
    novoPokemon.atack = pokemon.stats[1].base_stat,
    novoPokemon.defense = pokemon.stats[2].base_stat

    return novoPokemon;
}

function limitarBarra (level) {
    if(level > 100) {
        level = 100;
    }

    return level
}

function ajustarId (id) {
    id = id.toString()
    if(id.length === 1) {
        id = `00${id}`
    } else if(id.length === 2) {
        id = `0${id}`
    }

    return id
}

function getPokemonDetail(url) {
    
    fetch(url).
    then((response) => response.json()).
    then((pokemonDetail) => {

        pokemonDetalhado = criarPokemon(pokemonDetail, id);
        
        details.innerHTML = `
        <section class="box ${pokemonDetalhado.type} pokemon-image-box">
            <img class="pokemon-image" src="${pokemonDetalhado.photo}" alt="Foto ${pokemonDetalhado.name}">
        </section>
        
        <section class="box ${pokemonDetalhado.type} pokemon-details-box">
            <span>Número:</span>
            <span>${pokemonDetalhado.id}</span>
            <span>Nome:</span>
            <span>${pokemonDetalhado.name}</span>
            <span>Tipo:</span>
            <span>${pokemonDetalhado.type}</span>
            <span>Habilidade:</span>
            <span>${pokemonDetalhado.move}</span>
            <span>HP:</span>
            <span class="evolution-bar" style="width:${limitarBarra(pokemonDetalhado.hp)}%;">${pokemonDetalhado.hp}</span>
            <span>Ataque:</span>
            <span class="evolution-bar" style="width: ${limitarBarra(pokemonDetalhado.atack)}%;">${pokemonDetalhado.atack}</span>
            <span>Defesa:</span>
            <span class="evolution-bar" style="width: ${limitarBarra(pokemonDetalhado.defense)}%;">${pokemonDetalhado.defense}</span>
        </section>
    `

    console.log(pokemonDetalhado);
    })

}

getPokemonDetail(url);