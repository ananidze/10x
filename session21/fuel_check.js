const fuelCapacity = 100;
const currentFuel = 81;

const hasEnoughFuel = currentFuel > fuelCapacity * 0.8

console.log(`Apollo has ${hasEnoughFuel ? 'enough' : 'insufficient'} fuel for the mission`);