const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = ({
  title,
  description,
  installation,
  usage,
  contribution,
  test,
  selectedLicense,
}) =>
  `# ${title}

## Description
${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Test](#test)

## Installation
${installation}

## Usage
${usage}

## ${selectedLicense}

## How to Contribute
${contribution}

## Tests
${test}

`;

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

inquirer
  .prompt([
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
