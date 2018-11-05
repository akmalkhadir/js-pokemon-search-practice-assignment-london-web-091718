const pokeList = document.querySelector('#pokemon-container')
const pokeForm = document.querySelector('#pokemon-search-form')
let pokemonData

// Create a single pokemon DOM element
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
.then(pokemons => {
  pokemonData = pokemons
  addPokemons(pokemons)
})

// Form search function
// Fuzzy Search
const fuzzySearch = term => {
  return pokemonData.filter(pokemon => pokemon.name.toLowerCase().includes(term.toLowerCase()))
}

// Add event listener to Search Form
pokeForm.addEventListener("input", event => {
  pokeList.innerHTML = ``
  
  let term = event.target.value
  searchedPokemonData = fuzzySearch(term)

  if (searchedPokemonData.length < 1) {
    return (pokeList.innerHTML = `<p class="center-text">No Pokemon yo!</p>`)
  } else {
    return (searchedPokemons = addPokemons(searchedPokemonData))
  }
});
