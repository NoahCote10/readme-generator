// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
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
            name: 'questions-github',
            message: 'Enter your GitHub username.'
        },
        {
            type: 'input',
            name: 'questions-email',
            message: 'Enter email and contact instructions.'
        },
    ]
// TODO: Create a function to write README file
function createReadMe(name, input) {
    fs.writeFile(name, input, (err) => 
    err ? console.error(err) : console.log ("ReadMe successfully created"))
 }

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions).then((data) => {
        const content = generateMarkdown(data);
        createReadMe("README.md", content)
    })
}

// Function call to initialize app
init();
