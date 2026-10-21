let favoriteDesserts = [
  "Buttercup Cupcakes",
  "Enchancian Berry Tart",
  "Royal Apple Turnover"
];

// 1. push() - Mutates: adds an element to the end
favoriteDesserts.push("Princess Velvet Cake");

// 2. shift() - Mutates: removes the first element
favoriteDesserts.shift();

// 3. for...of - Iterates over elements
console.log("Iterating with for...of:");
for (const dessert of favoriteDesserts) {
  console.log("- " + dessert);
}

// 4. map() - Non-mutating: returns a new transformed array
const transformedDesserts = favoriteDesserts.map(
  (dessert) => "Delicious " + dessert
);

// Comparison
console.log("\nOriginal Array after mutations:");
console.log(favoriteDesserts);

console.log("\nTransformed Array (returned by map):");
console.log(transformedDesserts);