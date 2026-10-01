const rawName = "  celine and jane  ";
const cleanName = rawName.trim();
const [person1, connector, person2] = cleanName.split(" ");
console.log(person1.toUpperCase());
console.log(cleanName.includes("jane"));

console.log(parseInt("26px"));
console.log((13.1725).toFixed(2));
console.log(Number.isNaN("abc" / 2));