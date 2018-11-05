
// GET all Pokemons
getPokemons = () =>
  fetch('http://localhost:3000/pokemon')
  .then(resp => resp.json())
