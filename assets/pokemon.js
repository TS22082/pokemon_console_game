function Pokemon(name) {
  if (name === "Squirtle") {
    this.name = "Squirtle";
    this.type = "water";
    this.hp = 20;
    this.attack = 5;
  }
  if (name === "Charmander") {
    this.name = "Charmander";
    this.type = "fire";
    this.hp = 20;
    this.attack = 5;
  }
  if (name === "Bulbasaur") {
    this.name = "Bulbasaur";
    this.type = "grass";
    this.hp = 20;
    this.attack = 5;
  }
}

module.exports = Pokemon;
