function greetUser(name) {
  return "Hello, " + name + "! Ready to listen to uplifting music?";
}

const multiplyBy13 = (num) => num * 13;

function calculateDifferenceAndQuotient(a, b) {
  return { difference: a - b, quotient: a / b };
}

console.log(greetUser("Jane"));
console.log(multiplyBy13(26));
console.log(calculateDifferenceAndQuotient(26, 13));