class Person {
  constructor(name) {
    this.name = name;
  }
  introduce() {
    console.log(`Hi, I am ${this.name}.`);
  }
}

class Reader extends Person {
  readNovel() {
    console.log(`${this.name} is reading novels!`);
  }
}

const reader = new Reader("Charlie");
reader.introduce();
reader.readNovel();