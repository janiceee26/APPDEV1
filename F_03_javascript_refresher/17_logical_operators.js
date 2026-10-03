// Princess Sofia's Theme - Logical Operators & Truthiness
const royalValues = [
  0,
  "",
  "Amulet of Avalor",
  null,
  undefined,
  [],
  {}
];

royalValues.forEach(val => console.log(val, "->", val ? "truthy" : "falsy"));

const canTalkToAnimals = true;
const hasRoyalAmulet = true;
const fullRoyalPower = canTalkToAnimals && hasRoyalAmulet;

const isAmber = false;
const isSofia = true;
const isEnchancianPrincess = isAmber || isSofia;

console.log(fullRoyalPower, isEnchancianPrincess);
console.log("" || "Default Spell: Sparkle");
console.log("Royal Ball" && "Ball Started!");