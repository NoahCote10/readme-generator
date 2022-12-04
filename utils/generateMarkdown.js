// License info to be called by functions below
const licenseChoices = {
  "MIT":
  {
    badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    link: "https://choosealicense.com/licenses/mit/"
  },

  "Mozilla Public License 2.0":
  {
    badge: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    link: "https://choosealicense.com/licenses/mpl-2.0/"
  },

  "Apache License 2.0":
  {
    badge: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    link: "https://choosealicense.com/licenses/apache-2.0/"
  },

};

//Returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(data) {
  if (data !== "None") {
    return licenseChoices[data].badge
  } else {
    return ""
  }
};

// Returns the license link
// If there is no license, returns an empty string
function renderLicenseLink(data) {
  if (data !== "None") {
    return licenseChoices[data].link
  } else {
    return ""
  }
};

// Adds License section if license is selected
const addLicenseTOC = (data) => {
  if (data !== "None") {
    return `- [License](#license)`
  } else {
    return ""
  }
};

function renderLicenseSection(data) {
  if (data !== 'None') {
    return `## License <a name="license"></a>
[For more information about this license click here:](${renderLicenseLink(data)})`
  } else {
    return ""
  }
}

//Generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
${renderLicenseBadge(answers.license)}
## Table of Contents
- [Description](#description)
- [Installation](#installation)

${addLicenseTOC(answers.license)}
- [Usage](#usage)
- [Contribution](#contributing)
- [Testing](#tests)
- [Questions](#questions)
    
## Description <a name="description"></a>
${answers.description}
## Installation <a name="installation"></a>
${answers.installation}
${renderLicenseSection(answers.license)} 
## Usage <a name="usage"></a>
${answers.usage}
## Contribution <a name="contributing"></a>
${answers.contributing}
## Testing <a name="tests"></a>
${answers.tests}
## Questions <a name="questions"></a>
If you have any questions at all feel free to contact me here or by email:
  
[GitHub](https://github.com/${answers.github})   
[Email: ${answers.email}](mailto:${answers.email})
`;
}

module.exports = generateMarkdown;
