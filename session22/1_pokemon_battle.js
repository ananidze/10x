/*
 * Pokémon Battle – Function Basics
 * 
 * Story:
 * Ash and Gary are having a fierce Pokémon battle. Pikachu and Charizard are facing off,
 * but Ash isn't sure who has the higher attack power. Can you help him decide which
 * Pokémon is stronger?
 */

function compareAttack(pokemon1, attack1, pokemon2, attack2) {
  if (attack1 > attack2) {
    return `${pokemon1} is stronger!`;
  } else {
    return `${pokemon2} is stronger!`;
  }
}

console.log(compareAttack("Pikachu", 55, "Charizard", 84));