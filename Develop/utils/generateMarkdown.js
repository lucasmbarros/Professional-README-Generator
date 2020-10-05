// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Questions](#questions)
  ## Installation
  ${data.install}
  ## Usage
  ${data.usage}
  ## Credits
  Made with ❤️ by: ${data.credits}
  ## License
  ${data.license}
  ## Questions
  [Github](https://github.com/${data.user})
  ${data.email}
  
`;
}

module.exports = generateMarkdown;
