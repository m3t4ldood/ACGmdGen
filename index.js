// imports
const inquirer = require("inquirer");
const generatorMarkdown = require("./generateMarkdown")
const fs = require("fs");

// questions for user
const questions = [
    {
    type: "input",
    message: "What is your Name?",
    name: "userName",
    },
    {
    type: "input",
    message: "What is your Email?",
    name: "Email",
    },
    {
    type: "input",
    message: "What is the name of your project?",
    name: "Title",
    },
    {
    type: "input",
    message: "Please give a description of your project?",
    name: "Description",
    },
    {
    type: "input",
    message: "What necessary dependencies must be installed to run this app?",
    name: "Imstallation",
    },
    {
    type: "input",
    message: "What is this app used for?",
    name: "Usage",
    },
    {
    type: "input",
    message: "What license was used for this README?",
    name: "License",
    },
    {
    type: "input",
    message: "Please add contributors",
    name: "Contributor",
    },
    {
    type: "input",
    message: "What command do you use to test this App?",
    name: "Test",
    },
];

// writing to a file
function writeToFile(fileName, data) {

fs.writeFile("./demo/"+fileName, data, function(err) {
  if (err) {
    return console.log(err);      
    }
    console.log ("Successfully wrote : " + fileName);
})

}


// initialization function
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("DemoREADME.md", generatorMarkdown(data));
    })
}


// run the app
init();
