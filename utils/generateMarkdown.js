// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  } 
  return `![badge](https://img.shields.io/badge/license-${license}-brightgreen)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return 'license link'
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  } 
  return `## License

This application is covered by the ${license} license. `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

${(!data.description)? ``: '## Description  <br />'} 
${data.description}


## Table of Contents

${(!data.installation)? ``: '* [Installation](#installation)'}
${(!data.usage)? ``: '* [Usage](#usage)'}
${(!data.license)? ``: '* [License](#license)'}
${(!data.contribution)? ``: '* [Contributing](#Contributing)'}
${(!data.test)? ``: '* [Tests](#Tests)'}
${(!data.github)? ``: '* [Questions](#Questions)'}


${(!data.installation)? ``: '## Installation <br />'}
${data.installation}

${(!data.usage)? ``: '## Usage <br />'}
${data.usage}

${renderLicenseSection(data.license)}

${(!data.contribution)? ``: '## Contributing <br />'}
${data.contribution}

${(!data.test)? ``: '## Tests <br />'}
${data.test}


## Questions

:octocat: Find me on GitHub: [${data.github}](https://github.com/${data.github}) or email me at ${data.email}

`;
}

module.exports = generateMarkdown;
