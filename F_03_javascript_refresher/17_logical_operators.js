const valuesToCheck = [0, "", "Listening to music", null, undefined, [], {}];
valuesToCheck.forEach(val => console.log(val, "->", val ? "truthy" : "falsy"));

const likesDancing = true;
const likesReading = true;
const activeUser = likesDancing && likesReading;

const isJane = false;
const isCeline = true;
const validUser = isJane || isCeline;

console.log(activeUser, validUser);
console.log("" || "Fallback Activity");
console.log("Reading Novels" && "Novel Found!");