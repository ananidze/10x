/*
 * The Enchanted Mirror – Higher-Order Functions
 * 
 * Story:
 * In a hidden chamber of a mystical castle, there is an Enchanted Mirror that speaks only in uppercase letters.
 * The mirror allows visitors to ask one question, but it transforms their words before answering.
 */

function magicMirror(message, transformFunction) {
  const transformedMessage = transformFunction(message);
  
  return `The mirror says: ${transformedMessage}`;
}

console.log(magicMirror("Will I be rich?", str => str.toUpperCase()));