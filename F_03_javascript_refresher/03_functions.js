function greet(name) {
  return "Hello, " + name + "!";
}

const square = (num) => num * num;

function calculator(a, b) {
  return {
    sum: a + b,
    difference: a - b,
    product: a * b,
    quotient: a / b,
  };
}

console.log(greet("Justin Bieber"));
console.log(square(5));
console.log(calculator(10, 2));