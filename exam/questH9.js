const nodes = ["core", "grid", "relay"];

const labels = nodes.map((name, idx) => `${idx + 1}. ${name.toUpperCase()}`);

console.log(`Node list: ${labels}`);
