// 5. The Jedi Archives
// Create an array of Jedi names and search for 'Yoda' using the `find()` method. If found, return 'Master found!'
// Example input: `['Luke', 'Obi-Wan', 'Yoda', 'Anakin']`
// Expected output: `'Master found!'`

function findMaster(jediList) {
  const master = jediList.find(jedi => jedi === 'Yoda');
  return master ? 'Master found!' : 'Master not found';
}

console.log(findMaster(['Luke', 'Obi-Wan', 'Yoda', 'Anakin']));