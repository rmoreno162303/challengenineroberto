// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const genMarkDown = require("./generateMarkdown.js");
const fs = require('fs');
 const questions= [
        {
            type:'input',
            name: 'title',
            message:'What is the project title?',
            validate :(title) =>{   if(title){ return true;} else{
                return "Please enter project title"
            }},
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project.',
            validate:(description) =>{if(description){return true;} else{
                return "Please enter description of project."
            }},
        },
        {
            type: 'input',
            name: 'contents',
            message: 'Include a table of contents.',
            default:false,
            validate:(contents) =>{if(contents){return true;} else{
                return "Please enter whether you would like a Table of Contents."
            }},
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide instructions for installation.',
            validate:(installation) =>{if(installation){return true;} else{
                return "Please provide instructions for installation."
            }},
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide usage information.',
            validate:(usage) =>{if(usage){return true;} else{
                return "Please provide usage information."
            }},
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'Provide contribution guidelines.',
            validate:(contributions) =>{if(contributions){return true;} else{
                return "Please enter contributors."
            }},
        },
        {
            type: 'input',
            name: 'test',
            message: 'Provide test instructions.',
            validate:(test) =>{if(test){return true;} else{
                return "Please enter test instructions."
            }},
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Provide information for questions.',
        },
        ];
// TODO: Create an array of questions for user input

// TODO: Create a function to write README file
// fs.writeToFile('README.md', readMe(questions), (err) =>
//       err ? console.error(err) : console.log('Commit logged!')
// );

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then( (response) =>{
        //console.log(response);
        const readmecontent = genMarkDown(response);
      writeToFile("./generateREADME/README.md", readmecontent);
    })
}

// Function call to initialize app
init();
