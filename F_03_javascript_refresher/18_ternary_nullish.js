const chaptersRead = 17;
const status = chaptersRead >= 13 ? "Halfway Done" : "Just Started";
console.log(status);

const user = { name: "Charlie" };
console.log(user.profile?.favoriteNumber);

const danceScore = 0;
console.log(danceScore || 25);
console.log(danceScore ?? 25);