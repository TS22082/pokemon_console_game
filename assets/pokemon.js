function Pokemon(name) {
  if (name === "Squirtle") {
    this.name = "Squirtle";
    this.type = "water";
    this.hp = 20;
    this.att = 5;
  }
  if (name === "Charmander") {
    this.name = "Charmander";
    this.type = "fire";
    this.hp = 20;
    this.att = 5;
  }
  if (name === "Bulbasaur") {
    this.name = "Bulbasaur";
    this.type = "grass";
    this.hp = 20;
    this.att = 5;
  }
}

Pokemon.prototype.attack = function(poke) {
  poke.hp -= this.att;
  console.log(`${poke.name} was hit! remaining health: ${poke.hp}`);
};

module.exports = Pokemon;
