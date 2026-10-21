// 1. Array of Sofia's Royal Ball guests
const guestList = [
  { id: 1, name: "Princess Amber", title: "Sister", kingdom: "Enchancia" },
  { id: 2, name: "Prince James", title: "Twin Brother", kingdom: "Enchancia" },
  { id: 3, name: "Clover the Rabbit", title: "Best Animal Friend", kingdom: "Enchancia" }
];

// .map() - Transform guest list into invitation messages
const invitationCards = guestList.map(guest => `Royal Invitation: ${guest.name} (${guest.title})`);
console.log("--- Invitations (.map) ---");
invitationCards.forEach(card => console.log(card));

// Destructuring - Extract properties cleanly from an object
const vipGuest = { name: "Princess Amber", title: "Crown Princess", kingdom: "Enchancia" };
const { name, title } = vipGuest;
console.log("\n--- Destructuring ---");
console.log(`Honored Guest: ${name}, Title: ${title}`);

// Spread Syntax (...) - Immutably add new guests to the guest list
const newGuests = [
  { id: 4, name: "Cedric the Sorcerer", title: "Royal Sorcerer", kingdom: "Enchancia" },
  { id: 5, name: "Princess Hildegard", title: "Friend", kingdom: "Freezenburg" }
];

const allGuests = [...guestList, ...newGuests];
console.log("\n--- Spread Syntax (...) ---");
console.log("Updated Total Guests:", allGuests.length);
console.log(allGuests.map(g => g.name));