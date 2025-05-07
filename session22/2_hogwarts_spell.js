/*
 * Hogwarts Spell Casting – Function Parameters
 * 
 * Story:
 * Hermione is dueling Draco Malfoy in a spell-casting battle. She needs a function
 * to announce what spell she is casting. Help her write a function that properly
 * declares her spell attacks!
 */

function castSpell(spell, wizard) {
  return `${wizard} casts ${spell}!`;
}

console.log(castSpell("Expelliarmus", "Hermione"));