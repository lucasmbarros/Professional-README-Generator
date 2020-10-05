const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkDown = require("./utils/generateMarkdown");

const questions = () => {
  console.log(`
    =================
    Generate ReadMe!
    =================
    `);
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is your project title? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter project title!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Enter your project's description (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your project's description!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "install",
      message:
        "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log(
            "Please provide instructions on how to install your project!"
          );
          return false;
        }
      },
    },
    {
      type: "input",
      name: "usage",
      message:
        "Provide instructions and examples for use. Include screenshots if/as needed. (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please state uses for this project!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "credits",
      message: "List collaborators to this project",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please include collaborators!");
          return false;
        }
      },
    },
    {
      type: "checkbox",
      name: "license",
      message: "Please select a license from the list below.",
      choices: [
        {
          value: "Apache License 2.0",
        },
        {
          value: "GNU General Public License v3.0",
        },
        {
          value: "MIT License",
        },
        {
          value: "ISC License",
        },
      ],
    },
    {
      type: "input",
      name: "user",
      message: "Enter your github username (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please type in your github username !");
          return false;
        }
      },
    },

    {
      type: "input",
      name: "email",
      message: "Enter your email address (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please type in your email address !");
          return false;
        }
      },
    },
  ]);
};
questions().then((answers) => {
  console.log(answers);

  const template = generateMarkDown(answers);
  writeToFile("generatedReadMe.md", template);
});

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
    return console.log("File generated!");
  });
}

function init() {}
init();
