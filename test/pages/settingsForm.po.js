const commonActions = require('../core/CommonActions');
class SettingsForm{

    constructor() {
        this.projectNameTextField = '#project_name';
        this.changeAccountLink = '#account_change_link';
        this.changeAccountSelect = '#project_account_id_select';
        this.changeAccountSaveButton = '#save_button_id_span input';        
        this.privacyCheckBox = '#project_public';
        this.formSaveButton = '.save_bar [name="commit"]';
    }

    
    setProjectName(projectName) {
        commonActions.setValue(this.projectNameTextField, projectName);
    }

    selectAccount(accountName) {
        commonActions.click(this.changeAccountLink);
        commonActions.select(this.changeAccountSelect,accountName);
        commonActions.click(this.changeAccountSaveButton)
    }

    setPrivacy(value) {
        if (vlue.toLowerCase().equals("public")) {
            commonActions.check(this.privacyCheckBox);
        } else {
            commonActions.uncheck(this.privacyCheckBox);
        }
        
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