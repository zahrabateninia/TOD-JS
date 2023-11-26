// Factory function to create person objects
const createPerson = (name, age) => {
    const person = {}; // Create an empty object
  
    person.name = name;
    person.age = age;
  
    // Method shared among all person objects
    person.greet = function() {
      return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
    };
  
    return person;
  };
  
  // Create instances of person objects
  const person1 = createPerson('Alice', 25);
  const person2 = createPerson('Bob', 30);
  
  console.log(person1.greet()); // Output: Hello, my name is Alice and I'm 25 years old.
  console.log(person2.greet()); // Output: Hello, my name is Bob and I'm 30 years old.
  