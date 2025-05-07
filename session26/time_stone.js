// 8. The Time Stone (Array Slicing)
// Doctor Strange wants to revisit only the last 3 events from an array of mystical occurrences. Use `slice()` to retrieve them.
// Example input: `[ 'Dormammu Attack', 'Multiverse Glitch', 'Ancient One's Warning', 'Time Loop', 'Portal Opening' ]`
// Expected output: `['Ancient One's Warning', 'Time Loop', 'Portal Opening']`

function getLastEvents(events) {
  return events.slice(-3);
}

console.log(getLastEvents([
  'Dormammu Attack',
  'Multiverse Glitch',
  'Ancient One\'s Warning',
  'Time Loop',
  'Portal Opening'
]));