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
}) => {
  // Function to generate a badge URL based on the selected license
  const generateBadgeUrl = (license) => {
    const encodedLicense = encodeURIComponent(license);
    return `https://img.shields.io/badge/license-${encodedLicense}-brightgreen`;
  };

  // Generate the badge URL for the selected license
  const badgeUrl = generateBadgeUrl(selectedLicense);

  return `# ${title}

[![License Badge](${badgeUrl})](${badgeUrl})

## Description
${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Test](#test)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## License
This application is covered under the ${selectedLicense} license. 
Please see the [License Information](${badgeUrl}) for more details.

## Contribution
${contribution}

## Test
${test}

## Questions

**How to reach me with additional questions!** 

- GitHub profile: [GitHub Account](https://github.com/${github})
- Email: ${email}

`;
};

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
