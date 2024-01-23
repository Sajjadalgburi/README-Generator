const inquirer = require("inquirer");
const fs = require("fs");

// Title
// Description
// Table of Contents
// installation
// usage information
// conturbution information
// test instructions
// lastly questions => will have user github whcih will be a link
// also email with "instructions on how to reach me with additional questions"

const licenseOptions = [
  "MIT License",
  "GNU General Public License (GPL)",
  "Apache License 2.0",
  "BSD Licenses (2-Clause and 3-Clause)",
  "Creative Commons Licenses",
];

inquirer.prompt([
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
    name: "Installation",
    message: "Add Installation Instructions",
  },
  {
    type: "input",
    name: "UsageInformation",
    message: "Add Usage Information",
  },
  {
    type: "input",
    name: "Contribution",
    message: "Add Contribution Guidelines",
  },
  {
    type: "input",
    name: "Test",
    message: "Add Test Instructions",
  },
  {
    type: "list",
    name: "selectedLicense",
    message: "Select A License",
    choices: licenseOptions,
  },
]);
