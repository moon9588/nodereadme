// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license,licenseChoices) {
    if (license == licenseChoices[0]){
        var bag = "https://img.shieds.io/badge/License-Apache%202.0-blue.svg";
    } else if (license == licenseChoices[1]){
        var bag = "https://img.shieds.io/badge/License-Apache%202.0-blue.svg";
    } else {
        var bag = "";
    }
    return "[View Badget] (" + bag + ")";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license, licenseChoices) {
    if (license == licenseChoices[0]){
        var lic = "https://opensource.org/license/Apache-2.0";
    } else if (license == licenseChoices[1]){
        var lic = "https://opensource.org/licenses/MS-PL";
    } else {
        var lic = "";
    }

    return "[View License] (" + lic + ")";
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, licenseChoices) {
    if (license == "None"){
        return "";
    }
var badge = renderLicenseBadge (license, licenseChoices);
var link = renderLicenseLink (license, licenseChoices);

badge + " /r" + link + " ";

}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data,licenseChoices) {
    var sec = renderLicenseSection (data.License, licenseChoices);

    return `# ${data.title}
    ${sec}

    ###![GitHub license](https://img.shields.io/badge/License-Apache%202.0-blue.svg) 
    (https://opensource.org/licenses/Apache-2.0)
    <br>
    https://github.com/${data.Github}/${data.Title}

    #Table of Contents
    *[Installation] (#installation)
    *[Usage](#usage)
    *[License](#license)
    *[Tests](#tests)
    *[Questions](#questions)

    #Desription
    ${data.Description}

    #Installation
    The following must be installed to run this application
    ${data.Installation}

    #usage
    In order to use this app, ${data.Usage}

    #License 
    > This Project is licensed under the ${data.License} license.
    > ![GitHub license] (https://opensource.org/licenses/Apache-2.0)

    #contributing
    Contributors: ${data.Contribution}

    #Test
    The following is needed to run the test: ${data.Tests}

    #Questions
    If you have any questions about the repo/projects, please open an issue or contact me 
    via github username: ${data.Github}
    You can also get in contact me via email: ${data.Email}

    
    `;
}

module.exports = generateMarkdown;
