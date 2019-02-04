const commonActions = require('../core/CommonActions');
class ProjectHeader{

    constructor() {
        this.projectNameLabel = '.raw_context_name, span[class *= "projectName"]';
        this.privacyLabel = '.public_project_label, span[class *= "publicTag"]';        
    }

    getProjectName() {
        return commonActions.getText(this.projectNameLabel);
    }

    getPrivacy() {
        return commonActions.getText(this.privacyLabel).toLowerCase().replace(/[{()}]/g, '');
    }
}
module.exports = new ProjectHeader();