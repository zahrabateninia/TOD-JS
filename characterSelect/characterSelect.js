function Hero(name, level) {
  this.name = name;
  this.level = level;
}

let hero1 = new Hero('Bjorn', 1);

Hero.prototype.greet = function () {
  return `${this.name} says hello.`;
}