const commonActions = require('../core/CommonActions');
class Modal {

    constructor() {
        this.createButton = 'button[data-aid="FormModal__submit"]';
        commonActions.waitForVisible('div[data-aid="modal-content"]');
    }

    clickCreateButton() {
        commonActions.click(this.createButton);
    }
}
module.exports = Modal;