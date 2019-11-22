const lib = require("./util");

function Pokemon(name) {
  switch (name) {
    case "Squirtle":
      this.name = "Squirtle";
      this.type = "water";
      this.hp = 20;
      this.att = 5;
      break;

    case "Charmander":
      this.name = "Charmander";
      this.type = "fire";
      this.hp = 20;
      this.att = 5;
      break;

    case "Bulbasaur":
      this.name = "Bulbasaur";
      this.type = "grass";
      this.hp = 20;
      this.att = 5;
      break;

    default:
      break;
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
