const rasengan = 85;
const chidori = 90;
const amaterasu = 75;

if (rasengan >= chidori && rasengan >= amaterasu) {
    console.log(`The strongest jutsu is: Rasengan with a power of ${rasengan}`);
} else if (chidori >= rasengan && chidori >= amaterasu) {
    console.log(`The strongest jutsu is: Chidori with a power of ${chidori}`);
} else {
    console.log(`The strongest jutsu is: Amaterasu with a power of ${amaterasu}`);
}