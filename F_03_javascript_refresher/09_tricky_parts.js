// Princess Sofia's Royal Items - Equality & Emptiness

// 1. Equality with Amulet of Avalor
const amuletCount = 1;
console.log(amuletCount == "1");   // Loose equality
console.log(amuletCount === "1");  // Strict equality

// 2. Emptiness with Royal Gifts
let unassignedGift;                // undefined
const emptyJewelryBox = null;      // null
console.log(unassignedGift == emptyJewelryBox);  // Loose equality
console.log(unassignedGift === emptyJewelryBox); // Strict equality
console.log(typeof emptyJewelryBox);             // typeof null quirk

// 3. Object Reference with Royal Tiaras
const tiaraA = { gems: 5 };
const tiaraB = { gems: 5 };
console.log(tiaraA === tiaraB);    // Reference comparison