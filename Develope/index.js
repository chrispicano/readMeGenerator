const inquerier = require("inquerier");
const fs = require("fs");

//An array of questions
const questions = [];

//Function to write README file
function writeToFile(fileName, data) {

}

//Initializing README file
function init() {
    
    //project title
    //description
    //installation instruction 
    //usage information 
    //countribution guidelines
    //test instructions 
    //choose licence 
    //github user name 
    //email address

    //Insert function for base template v

    inquerier
    .prompt([
        {
            type: "input",
            name: "github",
            message: "What is your Github username?"
        },
    
        {
            type: "input",
            name: "email",
            message: "What is your email?"
        },
    
        {
            type: "input",
            name: "project",
            message: "What is the name of this project?"
        },
    
        {
            type: "input",
            name: "description",
            message: "Please give a short description of this project."
        },
    
        {
            type: "input",
            name: "github",
            message: "What is your Github username?"
        },
    
        {
            type: "input",
            name: "installation",
            message: "Please provide instructions for the installation process of this application."
        },
    
        {
            type: "input",
            name: "usage",
            message: "Please provide instructions on how to use this application."
        },
    
        {
            type: "list",
            name: "license",
            message: "What license does this application back?",
            choices: ['MIT', 'APACHE 2.0', 'GNU GPLv3', 'GNU AGPLv3', 'Mozilla Public License 2.0', 'Boost Software License 1.0', 'None']
        
        }
    ])
}