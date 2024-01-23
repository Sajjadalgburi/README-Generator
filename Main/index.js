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
  github,
  email,
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

## Installation <a name="installation"></a>
${installation}

## Usage <a name="usage"></a>
${usage}

## License <a name="license"></a>
This application is covered under the ${selectedLicense}

## How to Contribute <a name="contribution"></a>
${contribution}

## Tests <a name="test"></a>
${test}

## Questions

how to reach me with additional questions!
GitHub profile: [https://github.com/${github}](https://github.com/${github})
email: ${email}`;

const licenseOptions = [
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
    },
    {
      type: "input",
      name: "email",
      message: "Enter email",
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
