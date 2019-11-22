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

superEffective = (obj1, obj2) => {
  obj1.hp -= obj2.att + 5;
  console.log(`\n\n${obj2.name} attacked!!!\n`);
  console.log(`${obj1.name} was hit! remaining health: ${obj1.hp}\n`);
  console.log("its super effective!!!\n\n");
};

Pokemon.prototype.attack = function(poke) {
  if (this.type === "grass" && poke.type === "water") {
    superEffective(poke, this);
  } else if (this.type === "water" && poke.type === "fire") {
    poke.hp -= this.att + 5;
    superEffective(poke, this);
  } else if (this.type === "grass" && poke.type === "water") {
    superEffective(poke, this);
  } else if (this.type === "fire" && poke.type === "grass") {
    superEffective(poke, this);
  } else {
    poke.hp -= this.att;
    console.log(`\n\n${this.name} attacked!!!\n`);
    console.log(`${poke.name} was hit! remaining health: ${poke.hp}\n\n`);
  }
};

module.exports = Pokemon;
