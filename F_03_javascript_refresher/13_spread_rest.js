// Princess Sofia's Theme - Spread & Rest Operators

// 1. Array Spread - Creating a new array without mutating the original
const originalSpells = ["Animal Speech", "Shrinking"];
const allSpells = [...originalSpells, "Mermaid Transformation", "Summoning Princesses"];

console.log("--- Array Immutability Check ---");
console.log("Original Spells:", originalSpells);
console.log("All Spells:", allSpells);
console.log("Is original array unchanged?", originalSpells.length === 2 && !originalSpells.includes("Mermaid Transformation"));

// 2. Object Spread - Creating a new object without mutating the original
const basePrincess = { name: "Sofia", kingdom: "Enchancia" };
const crownedPrincess = { ...basePrincess, magicalItem: "Amulet of Avalor", status: "Crown Princess" };

console.log("\n--- Object Immutability Check ---");
console.log("Original Princess Object:", basePrincess);
console.log("Crowned Princess Object:", crownedPrincess);
console.log("Is original object unmutated?", !("magicalItem" in basePrincess));

// 3. Rest Operator - Collecting multiple function arguments into an array
function assembleRoyalParty(host, ...specialGuests) {
  console.log(`\n--- Rest Operator Collection ---`);
  console.log(`Host: ${host}`);
  console.log(`Collected Guests (Rest Array):`, specialGuests);
  return `${host} assembled ${specialGuests.length} royal companions.`;
}

const partySummary = assembleRoyalParty("Princess Sofia", "Amber", "James", "Clover", "Cedric");
console.log(partySummary);