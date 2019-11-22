const inquirer = require("inquirer");

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
      res.mainmenu === "Journey" ? console.log("ambushed!!") : process.exit();
    });
};

mainMenu();
