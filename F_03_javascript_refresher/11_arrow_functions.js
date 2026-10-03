// 1. Implicit Return (Single-expression, no curly braces or 'return' keyword needed)
const greetRoyal = name => "Royal Greetings, " + name + " of Enchancia!";
const doubleAmuletGems = count => count * 2;

// 2. Full Function Body (Block body with curly braces and explicit statements/return)
const prepareForRoyalPrep = subject => {
  console.log("Packing books for Royal Prep Academy...");
  return "Ready to study " + subject + "!";
};

// Executing functions
console.log(greetRoyal("Princess Sofia"));
console.log("Amulet Gem Count:", doubleAmuletGems(3));
console.log(prepareForRoyalPrep("Sorcery & Etiquette"));