// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = inquirer
    .prompt([
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
            type: 'confirm',
            name: 'confirm-toc',
            message: 'Do you need a Table of Contents? (Y/N)'
        },
        // type: 'checkbox',
        // name: 'toc',
        // message: 'Select your Table of Contents.'
        // choices: ['Installation','Usage', 'License', 'Contributing', 'Tests', 'Questions']
        {
            type: 'input',
            name: 'installation',
            message: 'Enter installation instructions here.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information here.'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Enter contributing instructions here.'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Enter testing instructions here.'
        },
        {
            type: 'input',
            name: 'questions-github',
            message: 'Enter your GitHub username here.'
            // use github API to pull user link
        },
        {
            type: 'input',
            name: 'questions-email',
            message: 'Enter email and contact instructions here.'
        },
    ])
// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
