const registry = [
  { name: "A", status: "old" },
  { name: "B", status: "old" },
];

Object.assign(
  registry,
  registry.map((item) => ({
    name: item.name,
    status: "upgraded",
  })),
);

console.log(`Updated nodes: ${registry.map((e) => e.name).join(",")}`);
