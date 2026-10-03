const aboutMe = {
  name: "Princess Sofia",
  age: 19,
  course: "Culinary Arts",
  introduce: function () {
    console.log(`Hi, I am ${this.name}, ${this.age} years old, studying ${this.course}!`);
  }
};

aboutMe.introduce();