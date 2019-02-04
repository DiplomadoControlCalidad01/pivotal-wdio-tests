const commonActions = require('../core/CommonActions');
const ProjectHeader = require('./projectHeader.po');
class Modal {

    constructor() {
        this.createButton = 'button[data-aid="FormModal__submit"]';
        this.container = 'div[data-aid="modal-content"]';
        commonActions.waitForVisible(this.container);
    }

    clickCreateButton() {
        commonActions.click(this.createButton);
        commonActions.waitForInvisible(this.container);        
    }
}
module.exports = Modal;