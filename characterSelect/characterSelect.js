function Hero(name, level) {
  this.name = name;
  this.level = level;
}

let hero1 = new Hero('Bjorn', 1);

Hero.prototype.greet = function () {
  return `${this.name} says hello.`;
}

function Warrior(name, level, weapon) {
  // Chain constructor with call
  Hero.call(this, name, level);
  this.weapon = weapon;
}

function Healer(name, level, spell) {
  Hero.call(this, name, level);

  this.spell = spell;
}