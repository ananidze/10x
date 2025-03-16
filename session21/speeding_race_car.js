const speedLimit = 50;

let carSpeed = 30;

carSpeed += 25;

if (carSpeed > speedLimit) {
    console.log(`Speed Warning: You are going too fast!`);
} else {
    console.log(`You are within the speed limit`);
}

console.log(`Current Speed: ${carSpeed}\nSpeed Limit: ${speedLimit}`)