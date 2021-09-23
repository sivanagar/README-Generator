// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./utils/page-template');
const generateMarkdown = require('./utils/generateMarkdown');

//sample data
const sampleData = {
    github: 'sivanagar',
    email: 'sivanagar@gmail.com',
    title: 'Project Name',
    description: 'This is a description for my project.',
    license: 'GNU',
    installation: 'install by doing a b c',
    usage: 'this is usage info',
    contribution: 'this is contribution info',
    test: 'test instructions'
  };

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    }
    // ,
    // {
    //     type: 'input',
    //     name: 'title',
    //     message: 'What is your Project Name? (Required)',
    //     validate: titleInput => {
    //       if (titleInput) {
    //         return true;
    //       } else {
    //         console.log('Please enter your Project Name!');
    //         return false;
    //       }
    //     }
    // },
    // {
    //     type: 'input',
    //     name: 'description',
    //     message: 'Please write a description of your project'        
    // },
    // {
    //     type: 'list',
    //     name: 'license',
    //     message: 'What kind of license should your project have?',
    //     choices: ['GNU','GPLv3', 'MIT']
    // },
    // {
    //     type: 'input',
    //     name: 'installation',
    //     message: 'What are the steps required to install your project?'        
    // },
    // {
    //     type: 'input',
    //     name: 'usage',
    //     message: 'Provide usage information for your project'        
    // },
    // {
    //     type: 'input',
    //     name: 'contribution',
    //     message: 'Provide contribution guidelines for your project'        
    // },
    // {
    //     type: 'input',
    //     name: 'test',
    //     message: 'Provide test instructions for your project'        
    // }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile ('readme.md', data, function(err) {
        if (err) {
          return console.log(err);
        }
        console.log("Success!");
    })}
    
    


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(data => {
            ///console.log(data)
            return generatePage(sampleData);
        })
        .then (data => {
            return writeToFile("readme.md", data)
        })
        .catch(err => {
            console.log(err);
        })
}

// Function call to initialize app
init();
