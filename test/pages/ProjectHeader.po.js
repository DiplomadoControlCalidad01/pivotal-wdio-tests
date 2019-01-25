const commonActions = require('../core/CommonActions');
class ProjectHeader{

    constructor() {
        this.projectNameLabel = '.raw_context_name';
        this.privacyLabel = 'public_project_label';
    }

    getProjectName() {
        return commonActions.getText(this.projectNameLabel);
    }

    getPrivacy() {
        return commonActions.getText(this.privacyLabel);
    }
}
module.exports = ProjectHeader;