// Person Base Class
class Person {
  constructor(name, kingdom) {
    this.name = name;
    this.kingdom = kingdom;
  }

  introduce() {
    console.log(`Hello, I am ${this.name} from ${this.kingdom}.`);
  }
}

// Student Derived Class inheriting from Person
class Student extends Person {
  constructor(name, kingdom, academy) {
    super(name, kingdom);
    this.academy = academy;
  }

  study() {
    console.log(`${this.name} is studying royal etiquette and magic at ${this.academy}!`);
  }
}

// Demonstration
const sofia = new Student("Princess Sofia", "Enchancia", "Royal Prep Academy");
sofia.introduce();
sofia.study();