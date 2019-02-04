const commonActions = require('../core/CommonActions');
const CreateProjectModal = require('../pages/createProjectModal.po');
class Dashboard {

    constructor() {
        this.createProjectButton = '#create-project-button';
        commonActions.waitForVisible('.Dashboard');
    }

    clickCreateProjectButton() {
        commonActions.click(this.createProjectButton);
        return new CreateProjectModal();
    }

    selectProject(projectName) {
        let allProjects = 'button[data-aid=\'show-more-projects-button\']';
        commonActions.click(allProjects);
        let selector = commonActions.concatLocator('//a[contains(text(),"', projectName, '")]');
        commonActions.click(selector);
    }

}
module.exports = Dashboard;