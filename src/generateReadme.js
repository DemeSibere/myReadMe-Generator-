function generateReadme(answers) {
    return `
<h1 align="center">${answers.projectTitle} </h1>
  

## Description
 ${answers.description}


## How to run the app
 ${answers.usage}

## Tests
 ${answers.tests}

## Questions
 ${answers.questions}<br />
<br />
    `;
  }
  
  module.exports = generateReadme;