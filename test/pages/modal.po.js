const commonActions = require('../core/CommonActions');
class Modal {

    constructor() {
        this.createButton = 'button[data-aid="FormModal__submit"]';
        commonActions.waitForVisible('div[data-aid="modal-content"]');
    }

    clickCreateButton(projectName) {
        commonActions.click(this.projectNameTextField);
    }
}
module.exports = Modal;