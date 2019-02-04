const commonActions = require('../core/CommonActions');
const SettingsForm = require('../pages/settingsForm.po');
class ProjectNav{

    constructor() {
        this.moreButton = 'a[data-aid="navTab-more"]';       
    }

    clickMore() {
        commonActions.click(this.moreButton);
        return new SettingsForm();
    }
}
module.exports = new ProjectNav();