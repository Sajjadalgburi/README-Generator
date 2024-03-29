const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

const licenseOptions = [
  "None",
  "MIT License",
  "GNU General Public License (GPL)",
  "Apache License 2.0",
  "BSD Licenses (2-Clause and 3-Clause)",
  "Creative Commons Licenses",
];

// Additional message before the questions
const preMessage =
  "\nWelcome to the README.md generator. Please Press Enter if You Wish to Skip:\n";

console.log(preMessage);
inquirer
  .prompt([
    {
      type: "input",
      name: "github",
      message: "Enter Your Github Username",
      validate: function (input) {
        if (input.trim() !== "") {
          return true;
        }
        return "Github username cannot be empty";
      },
    },
    {
      type: "input",
      name: "email",
      message: "Enter email",
      validate: function (input) {
        if (/^\S+@\S+\.\S+$/.test(input.trim())) {
          return true;
        }
        return "Please enter a valid email address";
      },
    },
    {
      type: "input",
      name: "title",
      message: "Enter Project Title",
    },
    {
      type: "input",
      name: "description",
      message: "Add Project Description",
    },
    {
      type: "input",
      name: "installation",
      message: "Add Installation Instructions",
    },
    {
      type: "input",
      name: "usage",
      message: "Add Usage Information",
    },
    {
      type: "input",
      name: "contribution",
      message: "Add Contribution Guidelines",
    },
    {
      type: "input",
      name: "test",
      message: "Add Test Instructions",
    },
    {
      type: "list",
      name: "selectedLicense",
      message: "Select A License",
      choices: licenseOptions,
    },
  ])
  .then((answers) => {
    const markedownContent = generateMarkdown(answers);

    fs.writeFile("README.md", markedownContent, (err) => {
      err
        ? console.error(err)
        : console.log("Successfully generated README.md");
    });
  });
