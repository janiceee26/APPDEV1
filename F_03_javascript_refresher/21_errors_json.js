function verifyAge(age) {
  if (age < 18) {
    throw new Error("Underage for event");
  }
  return "Verified!";
}

try {
  console.log(verifyAge(17));
} catch (err) {
  console.log("Error caught:", err.message);
}

const profileData = { name: "Jane", age: 26, lovesMusic: true };
const jsonString = JSON.stringify(profileData);
const parsedData = JSON.parse(jsonString);
console.log(jsonString, parsedData);