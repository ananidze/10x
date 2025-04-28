const sectors = [
  { name: "x", load: 20 },
  { name: "y", load: 50 },
  { name: "z", load: 40 },
];

const highestLoad = sectors.reduce((previous, current) => {
  return current.load > previous.load ? current : previous;
}, sectors[0] || {});

console.log(
  ` Critical sector: ${highestLoad.name} with load ${highestLoad.load}`,
);
