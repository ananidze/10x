const healthPotionPrice = 5;
const manaPotionPrice = 3;
console.info(`Health potion price: ${healthPotionPrice}`);
console.info(`Mana potion price: ${manaPotionPrice}`);

let totalCost = 3 * healthPotionPrice + 2 * manaPotionPrice

if (totalCost > 50) {
    totalCost -= totalCost * 0.3;
    console.log(`Total cost after discount: ${totalCost}`);
}

console.log(`Total cost: ${totalCost}`);