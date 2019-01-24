const commonActions = require('../core/CommonActions');
const Modal = require('../pages/modal.po');
class CreateProjectModal extends Modal{

    constructor() {
        super();
        this.projectNameTextField = 'input[name=project_name]';
        this.accountArrow = 'div[data-aid="menu-header"]';
    }

    setProjectName(projectName) {
        commonActions.setValue(this.projectNameTextField, projectName);
    }

    selectAccount(accountName) {
        commonActions.click(this.accountArrow);
        commonActions.click('//div[contains(@class,"option-account-name") and(text()="' + accountName + '")]');
    }

    setPrivacy(value) {
        commonActions.click('input[name="project_type"][data-aid="' + value + '"]');
    }

    fillForm(projectJson) {
        let projectSteps = {
            'Name' : () => this.setProjectName(projectJson.Name),
            'Account' : () => this.selectAccount(projectJson.Account),
            'Privacy' : () => this.setPrivacy(projectJson.Privacy)
        };
        Object.keys(projectJson).forEach(key => {
            projectSteps[key].call();
        });
    }
}
module.exports = CreateProjectModal;