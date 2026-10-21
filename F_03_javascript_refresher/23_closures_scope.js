if (true) {
  let innerScopedVar = "Inside Block Scope";
}

try {
  console.log(innerScopedVar);
} catch (e) {
  console.log("ReferenceError expected:", e.message);
}

function createDanceCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const janeCounter = createDanceCounter();
const celineCounter = createDanceCounter();

console.log(janeCounter()); // 1
console.log(janeCounter()); // 2
console.log(celineCounter()); // 1