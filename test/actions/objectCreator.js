const Navigator = require('../pages/navigator');

class ObjectCreator {

    static createProject(project) {
        let dashboard = Navigator.navigateToDashboard();
        let createProjectModal = dashboard.clickCreateProjectButton();
        createProjectModal.fillForm(project);
        createProjectModal.clickCreateButton();        
    }
}
module.exports = ObjectCreator;