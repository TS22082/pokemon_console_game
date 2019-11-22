const lib = require("./util");

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
  const conditions =
    (this.type === "grass" && poke.type === "water") ||
    (this.type === "water" && poke.type === "fire") ||
    (this.type === "fire" && poke.type === "grass");

  conditions ? lib.superEffective(poke, this) : lib.wasHit(poke, this);
};

module.exports = Pokemon;
