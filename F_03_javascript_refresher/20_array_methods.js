const items = [
  { name: "Novel Book", price: 17 },
  { name: "Dance Shoes", price: 26 },
  { name: "Music Earbuds", price: 13 }
];

const expensive = items.filter(i => i.price > 15);
const book = items.find(i => i.name === "Novel Book");
const hasCheapItem = items.some(i => i.price < 15);
const sorted = [...items].sort((a, b) => b.price - a.price);

console.log(expensive, book, hasCheapItem, sorted);