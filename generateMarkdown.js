// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.license}


  ## Description
  ${data.description}

  ## Table of Contents
  - [Description] (#description)
  - [Installation] (#installation)
  - [Usage] (#usage)
  - [Contributions] (#constributions)
  - [License] (#license)
  - [Test] (#test)
  - [Questions] (#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributions
  ${data.contributions}

  ## License
  ${data.license}
  This project is protected under a MIT license. 

  ## Test
  ${data.test}

  ## Questions
  ${data.questions}

  ${data.username}
  ${data.email}


`;
}

module.exports = generateMarkdown;
