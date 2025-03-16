const ticketPrice = 20;
const ticketSold = 500;
const concertCosts = 8000;

const totalEarnings = ticketPrice * ticketSold;
const profit = totalEarnings - concertCosts;

if (totalEarnings > concertCosts) {
    console.log(`Concert Profit: ${profit}`);
} else {
    console.log(`Concert did not cover costs. Earnings: ${totalEarnings}, Costs: ${concertCosts}`);
}