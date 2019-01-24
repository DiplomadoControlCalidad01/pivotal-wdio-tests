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
}
module.exports = Dashboard;