// 1. Object Destructuring
const royalCharacter = {
  name: "Princess Sofia",
  kingdom: "Enchancia",
  magicalItem: "Amulet of Avalor"
};
const { name, kingdom, magicalItem } = royalCharacter;
console.log(`${name} of ${kingdom} wields the ${magicalItem}.`);

// 2. Array Destructuring
const animalFriends = ["Clover the Rabbit", "Mia the Bluebird", "Robin"];
const [bestFriend, wingedFriend] = animalFriends;
console.log(`Best Friend: ${bestFriend}, Winged Friend: ${wingedFriend}`);

// 3. Parameter Destructuring in Functions
function announceRoyalEvent({ title, host, venue }) {
  console.log(`Event: ${title} | Hosted by: ${host} | Location: ${venue}`);
}

announceRoyalEvent({
  title: "Royal Banquet",
  host: "Princess Sofia",
  venue: "Enchancia Castle"
});