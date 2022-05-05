
<h1 align="center">README Generator</h1>
   

## Description

This project was created by Triology Education Services at the Southern Methodist University Boot Camp. It is a node.js application that uses inquirers input to populate a README file.
  
The README file can be found [here](./src/README.md)  
  
* Below is the gif showing the functionality of the application:
  
  ![Deme README Generator](./deme-readme-generator.gif)
  
🎥 The full movie file showing functionality of the application can be found [here](https://drive.google.com/file/d/1X34mBIy1TusnabRo06oYrroGKhR87yrv/view) 

  
## User Story
  
```
AS A developer
I WANT a README generator
SO THAT can quickly create a professional README for a new project 
```
  
## Acceptance Criteria
  
``` 
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```


## Installation   
  
`npm init`
  
`npm install inquirer`
  
## How to run the app
  
  Run the following command at th root of your project and answer the prompted questions:

`node index.js`

## Task
README generator generates:
- A table of content,
- License with badge(shield.io),
- Email and Github with hyperlinks, 
- Also includes Installation, usage, contributing, and tests sections.

In addition, a video walkthrough and a gif walkthrough has been included in this README file to showcase the functinality of README Generator app. 


----