const inquirer = require("inquirer");
const Trainer = require("./assets/trainer");
const Pokemon = require("./assets/pokemon");

coderMagic = player => {
  if (player.currentPokemon.hp <= 0) {
    return ["switch pokemon"];
  } else {
    return [`attack (with ${player.currentPokemon.name})`, "switch pokemon"];
  }
};

battle = (player, attacker) => {
  inquirer
    .prompt({
      type: "list",
      message: "What would you like to do?",
      choices: coderMagic(player),
      name: "battlechoice"
    })
    .then(res => {
      if (res.battlechoice === "switch pokemon") {
        inquirer
          .prompt({
            type: "list",
            message: "Choose a pokemon!",
            choices: player.pokemon,
            name: "pokechoice"
          })
          .then(res => {
            player.switchPokemon(res.pokechoice);
            attacker.attack(player.currentPokemon);
            battle(player, attacker);
          });
      } else {
        player.currentPokemon.attack(attacker);

        if (attacker.hp > 0) {
          attacker.attack(player.currentPokemon);
          battle(player, attacker);
        } else {
          console.log(`\n\nenemy ${attacker.name} got bored and left\n\n`);
          mainMenu();
        }
      }
    });
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

game = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your name traveler?",
        name: "name"
      }
    ])
    .then(res => {
      const Player1 = new Trainer("Thomas");
      Player1.readyForBattle();
      ambush(Player1);
    });
};

mainMenu = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        choices: ["Journey", "Quit"],
        name: "mainmenu"
      }
    ])
    .then(res => {
      res.mainmenu === "Journey" ? game() : process.exit();
    });
};

mainMenu();
