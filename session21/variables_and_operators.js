let gendalfPower = 100;
let dumbledorePower = 100;

console.info(`Gendalf's power: ${gendalfPower}`);
console.info(`Dumbledore's power: ${dumbledorePower}`);

gendalfPower += 50;
dumbledorePower -= 50;

console.log(`Gendalf's new power: ${gendalfPower}`);
console.log(`Dumbledore's new power: ${dumbledorePower}`);

if (gendalfPower > dumbledorePower) {
    console.log('Gendalf is more powerful than Dumbledore');
} else if (gendalfPower < dumbledorePower) {
    console.log('Dumbledore is more powerful than Gendalf');
} else {
    console.log('Gendalf and Dumbledore have the same power');
}