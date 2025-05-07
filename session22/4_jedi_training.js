/*
 * Jedi Training – Default Parameters
 * 
 * Story:
 * Master Yoda is training young Padawans, but some of them don't have assigned strength levels yet.
 * He needs your help to set their default power level if they don't provide one!
 */

function trainJedi(name, strength = 50) {
  return `${name} has ${strength} Power`;
}

console.log(trainJedi("Luke", 100));
console.log(trainJedi("Rey"));