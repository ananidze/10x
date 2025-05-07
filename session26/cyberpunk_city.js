// 10. Cyberpunk City Data Processing
// A cyber-detective is analyzing risk levels in a futuristic city. Use multiple array methods to process the risk levels.
// Example input: `[99, 135, 76, 200, 150, 89]`
// Expected output:
// Hex values: `['63', '87', '4c', 'c8', '96', '59']`
// Filtered high risks: `[135, 200, 150]`
// Total risk level: `749`
// First risk above 150: `200`
// Cleaned data (after removing <80): `[99, 135, 200, 150, 89]`

function processRiskLevels(risks) {
  const hexValues = risks.map(num => num.toString(16));
  
  const highRisks = risks.filter(num => num > 100);
  
  const totalRisk = risks.reduce((sum, num) => sum + num, 0);
  
  const firstHighRisk = risks.find(num => num > 150);
  
  const cleanedData = risks.filter(num => num >= 80);
  
  return {
    hexValues,
    highRisks,
    totalRisk,
    firstHighRisk,
    cleanedData
  };
}

const results = processRiskLevels([99, 135, 76, 200, 150, 89]);
console.log('Hex values:', results.hexValues);
console.log('Filtered high risks:', results.highRisks);
console.log('Total risk level:', results.totalRisk);
console.log('First risk above 150:', results.firstHighRisk);
console.log('Cleaned data:', results.cleanedData);