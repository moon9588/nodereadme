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
