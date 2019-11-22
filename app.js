const inquirer = require("inquirer");
const Trainer = require("./assets/trainer");
const Pokemon = require("./assets/pokemon");

const battle = (player, attacker) => {
  inquirer
    .prompt({
      type: "list",
      message: "What would you like to do?",
      choices: ["attack", "switch pokemon"],
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
        console.log("You attacked!!!");
        player.currentPokemon.attack(attacker);

        if (attacker.hp > 0) {
          attacker.attack(player.currentPokemon);
          battle(player, attacker);
        } else {
          console.log("#####################################");
          console.log(`\n\nenemy ${attacker.name} got bored and left\n\n`);
          console.log("#####################################");
          mainMenu();
        }
      }
    });
};

const ambush = player => {
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

const game = () => {
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

const mainMenu = () => {
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
