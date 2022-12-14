// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown")
// Array of questions for user input
const questions =[
        {
            type: 'input',
            name: 'title',
            message: 'Enter the title of your project.'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter the description of your repository.'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter installation instructions.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information.'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Enter contributing instructions.'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Enter testing instructions.'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select a license.',
            choices: ['MIT','Mozilla Public License 2.0','Apache License 2.0','None']
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username.'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter email.'
        },
    ]
// Writes README file
function createReadMe(name, input) {
    fs.writeFile(name, input, (err) => 
    err ? console.error(err) : console.log ("ReadMe successfully created"))
 }

// Initializes app
function init() { 
    inquirer.prompt(questions).then((answers) => {
        const content = generateMarkdown(answers);
        createReadMe("README.md", content)
    })
}

// Call to initialize app
init();
