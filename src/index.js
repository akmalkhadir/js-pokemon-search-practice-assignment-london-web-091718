const pokeList = document.querySelector('#pokemon-container')

document.addEventListener('DOMContentLoaded', () => {
  console.log(POKEMON)
  //YOUR CODE HERE
})


// Create a single pokemon element
const addPokemon = pokemon => {
  const singlePokemonBox = document.createElement('div')
  singlePokemonBox.setAttribute("class", "pokemon-container")
  singlePokemonBox.innerHTML = `
  <div class="pokemon-frame">
    <h1 class="center-text">${pokemon.name}</h1>
    <div style="width:239px;margin:auto">
      <div style="width:96px;margin:auto">
        <img src="${pokemon.sprites.front}">
      </div>
    </div>
  </div>
`
  pokeList.appendChild(singlePokemonBox)
}

// Create all pokemons
const addPokemons = pokemons => pokemons.forEach(pokemon => addPokemon(pokemon))

// Get & create all Pokemons
getPokemons()
.then(pokemons => addPokemons(pokemons))
