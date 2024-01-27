const generateBadgeUrl = (license) => {
  const encodedLicense = encodeURIComponent(license);
  return `https://img.shields.io/badge/license-${encodedLicense}-brightgreen`;
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT License") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "GNU General Public License (GPL)") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "Apache License 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "BSD Licenses (2-Clause and 3-Clause)") {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  } else if (license === "Creative Commons Licenses") {
    return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return "";
  } else {
    return "- [License](#license)";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else {
    return `
## License
This application is covered under the ${license} license.`;
  }
}

function renderDescriptionSection(description) {
  if (description === "") {
    return "";
  } else {
    return `## Description 
              ${description}
    `;
  }
}

function renderInstallationSection(installation) {
  if (installation === "") {
    return "";
  } else {
    return `## Installation
${installation}
    `;
  }
}

function renderInstallationLink(installation) {
  if (installation === "") {
    return "";
  } else {
    return "- [Installation](#installation)";
  }
}

function renderUsageDescriptionSection(usage) {
  if (usage === "") {
    return "";
  } else {
    return `## Installation
${usage}
    `;
  }
}

function renderUsageLink(usage) {
  if (usage === "") {
    return "";
  } else {
    return "- [Usage](#usage)";
  }
}

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
  // Generate the badge URL for the selected license
  const badgeUrl = renderLicenseBadge(selectedLicense);

  return `# ${title}

${badgeUrl}

${renderDescriptionSection(description)}

## Table of Contents

${renderInstallationLink(installation)}
${renderUsageLink(usage)}
${renderLicenseLink(selectedLicense)}
- [Contribution](#contribution)
- [Test](#test)
- [Questions](#questions)

${renderInstallationSection(installation)}

${renderUsageDescriptionSection(usage)}

${renderLicenseSection(selectedLicense)}

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

module.exports = generateMarkdown;
