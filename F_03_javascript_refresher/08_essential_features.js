const hobbiesList = ["learning a dance trend", "reading novels", "listening to uplifting music"];
hobbiesList.map(hobby => console.log(hobby));

const person = { name: "Charlie", age: 25 };
const { name, age } = person;
console.log(name, age);

const setA = [13, 17];
const updatedSet = [...setA, 25, 26];
console.log(updatedSet);