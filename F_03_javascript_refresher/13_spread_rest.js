const initialScores = [13, 17];
const allScores = [...initialScores, 25, 26];
console.log(allScores);

const member = { name: "Jane", age: 25 };
const updatedMember = { ...member, favoriteNumber: 26 };
console.log(updatedMember);

function sumNumbers(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
console.log(sumNumbers(13, 17, 25, 26));