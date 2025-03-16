const iceCreamConePrice = 4.00;
const iceCreamSundaePrice = 8.00;

const conesSoldToday = 250;
const sundaesSoldToday = 120;

const totalConesSale = conesSoldToday * iceCreamConePrice;
const totalSundaesSale = sundaesSoldToday * iceCreamSundaePrice;

const dailyEarnings = totalConesSale + totalSundaesSale;
console.log(`Daily earnings: ${dailyEarnings}`);

const shouoldDiscount = dailyEarnings >= 1000;

const discountedPrice = shouoldDiscount ? dailyEarnings * 0.95 : dailyEarnings;
console.log(`Total cost after discount: ${discountedPrice}`);

const discountApplied = (dailyEarnings - discountedPrice) === 0;
console.log(`Discound Applied: ${discountApplied}`);