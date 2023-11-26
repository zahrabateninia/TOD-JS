const personPrototype = {
    greet: function() {
      return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
    }
  };
  
  const createPerson = (name, age) => {
    const person = Object.create(personPrototype); // Use Object.create to set the prototype
  
    person.name = name;
    person.age = age;
  
    return person;
  };
  
  const person1 = createPerson('Alice', 25);
  const person2 = createPerson('Bob', 30);
  
  console.log(person1.greet()); // Output: Hello, my name is Alice and I'm 25 years old.
  console.log(person2.greet()); // Output: Hello, my name is Bob and I'm 30 years old.
  