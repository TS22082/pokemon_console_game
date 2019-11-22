const Pokemon = require("./pokemon");

wasHit = (attacked, attacker) => {
  attacked.hp -= attacker.att;
  console.log(`\n\n${attacker.name} attacked!!!\n`);
  console.log(`${attacked.name} was hit! remaining health: ${attacked.hp}\n`);
  console.log("its super effective!!!\n\n");
};

superEffective = (attacked, attacker) => {
  attacked.hp -= 5;
  wasHit(attacked, attacker);
};

ambush = player => {
  const wildPokemon = [
    new Pokemon("Bulbasaur"),
    new Pokemon("Squirtle"),
    new Pokemon("Charmander")
  ];

  const attackingPoke = wildPokemon[Math.floor(Math.random() * 2)];

  console.log(
    `\n\n!!! You are being attacked by ${attackingPoke.name} !!! \n\n`
  );
  battle(player, attackingPoke);
};

module.exports = {
  wasHit: wasHit,
  superEffective: superEffective,
  ambush: ambush
};
