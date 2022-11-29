// License info to be called by functions below
const licenseChoices = {
  "MIT": 
  {badge:"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  link:"https://choosealicense.com/licenses/mit/"},
  
  "Mozilla Public License 2.0": 
  {badge:"[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
  link:"https://choosealicense.com/licenses/mpl-2.0/"},
  
  "Apache License 2.0": 
  {badge:"[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  link:"https://choosealicense.com/licenses/apache-2.0/"},
                                  
  };

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if(data !== "None"){
    return licenseChoices[data].badge
  } else {
    return ""
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if(data !== "None"){
    return licenseChoices[data].link
  } else {
    return ""
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

// Adds License section if license is selected
const addLicenseTOC = (data) => {
  if(data !== "None"){
    return `
    - [License](#license)`
  } else {
      return ""
  }
};

function renderLicenseSection(license) {
    if(data !== 'None'){
      return `
    
    ## License <a name="license"></a>
    [For more information about the license click here](${renderLicenseLink(data)})`
    } else {
      return ""
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.title)}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)${addLicenseTOC(data.license)}
  - [Usage](#usage)
  - [Contribution](#contributing)
  - [Testing](#tests)
  - [Questions](#questions)
    
  ## Description <a name="description"></a>
  ${data.description}
  ## Installation <a name="installation"></a>
  ${data.installation}${renderLicenseSection(data.license)}
  
  ## Usage <a name="usage"></a>
  ${data.usage}
  ## Contribution <a name="contributing"></a>
  ${data.contributing}
  ## Testing <a name="tests"></a>
  ${data.tests}
  ## Questions <a name="questions"></a>
  If you have any questions at all feel free to contact me here or by email:
  
  [GitHub](https://github.com/${data.questions-github})
  [Email: ${data.questions-email}](mailto:${data.questions-email})
`;
}

module.exports = generateMarkdown;
