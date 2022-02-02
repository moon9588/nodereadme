// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const inquirer = require("inquirer");
const fs = require('fs');
const util = require("util");

const generateMarkdown = require('./util/generateMarkdown');
 
const licenseChoices = [
    "Apache 2.0",
    "Microsoft Public License",
    "None"
];

// questions
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'Whats the name of your projects (Required)',
    },
    {
        type: 'input',
        name: 'Table of Contents.',
        message: 'Table of Contents.',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'What is the projects about? Give a detailed description of this project',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What does the user need to install to run/work-on this project',
    },

    {
        type: 'input',
        name: 'Usage',
        message: 'How to use this app/project? Please provide instructions',
    },
    
    {
        type: 'list',
        name: 'License',
        message: 'Please select license used for this project, from the following list',
        choices: licenseChoices

        // [
        //     'MIT',
        //     'BSD 3',
        //     'APACHE 2.0',
        //     'GVL-GPL 3.0',
        //     'Other',
        //     'None'
        // ]
    },
    {
        type: 'input',
        name: 'Contribuation',
        message: 'Who has and who can contribute to this project',
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'How to best test this app/projects? Any special commands for this command line application?',
    },
    {
        type: 'input',
        name: 'Questions',
        message: 'Please provide contact info for any inquires',
    },
    {
        type: 'input',
        name: 'Github',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is your email address',
    },
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("success")
        }

    })
}

// TODO: Create a function to initialize app
function init(){
    inquirer.prompt(questions)
    .then(function(data){
        writeToFile("README.md", generateMarkdown(data,licenseChoices));
        console.log(data)
    })
}

// Function call to initialize app
init();