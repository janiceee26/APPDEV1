const novel = { title: "Mystery Novel", totalPages: 260 };
const { title, totalPages } = novel;
console.log(title, totalPages);

const customNumbers = [13, 17, 25, 26];
const [num1, num2] = customNumbers;
console.log(num1, num2);

function printUser({ username }) {
  console.log("Current User:", username);
}
printUser({ username: "Celine" });