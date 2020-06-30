const Generator = require('yeoman-generator');
const addExportToIndex = require('./helpers/add-export-to-index.ts');
const createFileFromTemplate = require('./helpers/create-file-from-template.ts');
const prepareTemplateData = require('./helpers/prepare-template-data.ts');
const addLinkToSite = require('./helpers/add-link-to-site.ts');

module.exports = class extends Generator {

  prompting() {
    this.log('Welcome to Newskit component generator.');
    const self = this;
    return this.prompt([
      {
        type: 'input',
        name: 'componentNameInput',
        message: 'Name of your component',
      },
    ]).then(answers => {
      self.answers = answers;
    });
  }

  writing() {
    const {componentNameInput} = this.answers;
    const componentName =
      componentNameInput.charAt(0).toUpperCase() + componentNameInput.slice(1);
    const componentFileName = componentNameInput.toLowerCase();
    const templatesData = prepareTemplateData(componentName, componentFileName);
    
    // Change root to ./src
    this.log(`Writing files into: ${this.destinationRoot('./src')}`);

    // Add export for the new component in root index
    const source = this.fs.read(this.destinationPath('index.ts'));
    const {code} = addExportToIndex(source,componentFileName);
    this.fs.write(this.destinationPath('index.ts'), code);

    // Creating files from templates into ./src folder
    templatesData.paths.forEach(templateData => {
      createFileFromTemplate(this, templateData, templatesData.names);
    });

    // Change root to ./site
    this.log(`Writing files into: ${this.destinationRoot('../site')}`);

    // Add documentation page in ./site
    createFileFromTemplate(this,{
      templatePath: './documentation-page.mdx',
      destinationPath: `./pages/components/${componentFileName}.mdx`,
    },templatesData.names)

    // Add link to documentation site
    const routes = JSON.parse(this.fs.read(this.destinationPath('routes.json')));
    const resultRoutes = addLinkToSite(routes, templatesData.names);
    this.fs.write(this.destinationPath('routes.json'), resultRoutes);
  }
};
