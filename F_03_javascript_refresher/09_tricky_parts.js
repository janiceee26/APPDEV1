console.log(26 == "26");  // true
console.log(26 === "26"); // false

let unassignedVar;
let emptyVar = null;
console.log(unassignedVar, emptyVar);

const personObj = {
  name: "Celine",
  regularFunc: function() { console.log(this.name); },
  arrowFunc: () => { console.log(this.name); }
};
personObj.regularFunc();
personObj.arrowFunc();

const originalNumbers = [13, 17];
const refCopy = originalNumbers;
refCopy.push(25);
console.log(originalNumbers); // [13, 17, 25]

const spreadCopy = [...originalNumbers];
spreadCopy.push(26);
console.log(originalNumbers); // [13, 17, 25]