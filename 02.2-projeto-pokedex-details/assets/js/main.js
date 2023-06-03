const details = document.querySelector('#details');
const options = document.querySelector('#options-list');


const pokemon = {
    photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
    number: '001',
    name: 'Bulbasaur',
    type: 'Grass',
    ability: 'Roar'
}

function apresentarDetalhesDosPokemons () {
    return `
        <section class="box pokemon-image-box">
            <img class="pokemon-image" src="${pokemon.photo}" alt="Foto ${pokemon.name}">
        </section>
        
        <section class="box pokemon-details-box">
            <span>Número:</span>
            <span>#${pokemon.number}</span>
            <span>Nome:</span>
            <span>${pokemon.name}</span>
            <span>Tipo:</span>
            <span>${pokemon.type}</span>
            <span>Habilidade:</span>
            <span>${pokemon.ability}</span>
            <span>HP:</span>
            <span class="evolution-bar" style="width: ${100}%;">.</span>
            <span>Ataque:</span>
            <span class="evolution-bar" style="width: ${100}%;">.</span>
            <span>Defesa:</span>
            <span class="evolution-bar" style="width: ${100}%;">.</span>
        </section>
    `
}

details.innerHTML = apresentarDetalhesDosPokemons();