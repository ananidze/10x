// 2. The Pokémon Filter
// Given an array of Pokémon with their combat power (CP), filter out Pokémon with CP more than 500 using the `filter()` method.
// Example input: `[ {name: 'Pikachu', CP: 320}, {name: 'Charizard', CP: 900} ]`
// Expected output: `[ {name: 'Charizard', CP: 900} ]`

function filterPokemon(pokemonList) {
  return pokemonList.filter(pokemon => pokemon.CP > 500);
}

console.log(filterPokemon([
  {name: 'Pikachu', CP: 320},
  {name: 'Charizard', CP: 900}
]));