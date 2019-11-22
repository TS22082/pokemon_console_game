const Pokemon = require("./pokemon");

function Trainer(name) {
  this.name = name;
  this.currentPokemon;
  this.pokemon = [
    new Pokemon("Squirtle"),
    new Pokemon("Charmander"),
    new Pokemon("Bulbasaur")
  ];
}

Trainer.prototype.showPokemon = function() {
  console.log(this.pokemon);
};

Trainer.prototype.setCurrentPokemon = function(poke) {
  this.pokemon.forEach((element, index) => {
    if (element.name === poke) {
      this.currentPokemon = element;
      this.pokemon.splice(index, 1);
    }
  });
};

Trainer.prototype.switchPokemon = function(poke) {
  this.pokemon.forEach((element, index) => {
    if (element.name === poke) {
      const pokeToSwitch = this.pokemon[index];
      this.pokemon[index] = this.currentPokemon;
      this.currentPokemon = pokeToSwitch;
    }
  });
};

module.exports = Trainer;
