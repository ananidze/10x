/*
 * Batman's Secret Identity – Function Closures
 * 
 * Story:
 * Gotham City's criminals are desperately trying to uncover Batman's true identity.
 * But Bruce Wayne is smart—he has stored his identity inside a function closure,
 * making it impossible to access unless called correctly.
 */

function batman() {
  return function revealIdentity() {
    return "I am Batman!";
  }
}

const whoIsBatman = batman();
console.log(whoIsBatman());