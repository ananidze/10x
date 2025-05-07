/*
 * Infinity Gauntlet – Function Scope
 * 
 * Story:
 * Thanos is about to snap his fingers, but before he does, he needs to check if he has all six Infinity Stones.
 * However, since he keeps his stones hidden inside a secret function, his assistants can't access the stones directly!
 */

function snapFingers() {
  const stones = 6;
  
  return function checkStones() {
    console.log(`Thanos has ${stones} stones. The universe trembles!`);
  }
}

snapFingers();
