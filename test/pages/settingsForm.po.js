const commonActions = require('../core/CommonActions');
const Dashboard = require('../pages/dashboard.po');
class SettingsForm{

    constructor() {
        this.projectNameTextField = '#project_name';
        this.changeAccountLink = '#account_change_link';
        this.changeAccountSelect = '#project_account_id_select';
        this.changeAccountSaveButton = '#save_button_id_span input';        
        this.privacyCheckBox = '#project_public';
        this.formSaveButton = '.save_bar [name="commit"]';
        this.deleteProjectLink = 'a#delete_link';
        this.confirmDeleteProjectButton = '#confirm_delete';
    }

    
    setProjectName(projectName) {
        commonActions.setValue(this.projectNameTextField, projectName);
    }

    selectAccount(accountName) {
        commonActions.click(this.changeAccountLink);
        commonActions.select(this.changeAccountSelect,accountName);
        commonActions.click(this.changeAccountSaveButton);
        commonActions.waitForLoading();        
    }

    setPrivacy(value) {
        if (value.toLowerCase() == "public") {
            commonActions.check(this.privacyCheckBox);
        } else {
            commonActions.uncheck(this.privacyCheckBox);
        }
    }

    clickFormSaveButton() {
        commonActions.click(this.formSaveButton);
    }

    clickDeleteProjectLink() {
        commonActions.scroll(this.deleteProjectLink);
        commonActions.waitForVisible(this.deleteProjectLink);        
        commonActions.click(this.deleteProjectLink);
    }

    clickConfirmDeleteProjectButton() {
        commonActions.click(this.confirmDeleteProjectButton);
        commonActions.waitForInvisible(this.confirmDeleteProjectButton);
        return new Dashboard();
    }

    editSettings(projectJson) {
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
module.exports = SettingsForm;