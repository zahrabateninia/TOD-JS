#!/usr/bin/env node

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function() {
      console.log(name)
    };
  }
  
  const player1 = new Player('steve', 'X');
  const player2 = new Player('also steve', 'O');
  player1.sayName(); // logs 'steve'
  player2.sayName(); // logs 'also steve'

  Object.getPrototypeOf(player1) === Player.prototype; // returns true
  Object.getPrototypeOf(player2) === Player.prototype; // returns true

  Player.prototype.sayHello = function() {
    console.log("Hello, I'm a player!");
 };
 
 player1.sayHello(); // logs "Hello, I'm a player!"
 player2.sayHello(); // logs "Hello, I'm a player!"

// Player.prototype.__proto__
Object.getPrototypeOf(Player.prototype) === Object.prototype; // true

// Output may slightly differ based on the browser
player1.valueOf(); // Output: Object { name: "steve", marker: "X", sayName: sayName() }
player1.hasOwnProperty('valueOf'); // false
Object.prototype.hasOwnProperty('valueOf'); // true