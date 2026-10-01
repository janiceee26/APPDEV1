let myHobbies = ["learning a dance trend", "reading novels", "listening to uplifting music"];

myHobbies.push("journaling");
myHobbies.shift();

for (const hobby of myHobbies) {
  console.log(hobby);
}

const formattedHobbies = myHobbies.map(hobby => "I enjoy " + hobby);
console.log(formattedHobbies);