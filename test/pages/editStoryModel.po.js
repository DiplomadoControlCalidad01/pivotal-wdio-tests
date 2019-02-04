const commonActions = require('../core/CommonActions');
class EditStory{

    constructor() {
        this.editButtonStart = '//span[contains(@class,\'tracker_markup\') and(text()="';
        this.editButtonEnd = '")]/preceding::button[contains(@class, \'expander undraggable\')]';
        this.description = 'div[data-aid=\'renderedDescription\']';
        this.save = 'button[data-aid=\'save\']';
        this.close = 'button[class=\'autosaves button std close\']';
    }

    static clickEditStory(storyName) {
        let editSelector = commonActions.concatLocator('//span[contains(@class,\'tracker_markup\') and(text()="',
            storyName,
            '")]/preceding::button[contains(@class, \'expander undraggable\')]');
        commonActions.click(editSelector);
    }

    setNewDescription(newDescription) {
        commonActions.setValue(this.description, newDescription);
    }

    saveDescription() {
        commonActions.click(this.save);
    }

    clickCloseButton() {
        commonActions(this.close);
    }

    static editStory(storyName, description) {
        let edit = new EditStory();
        EditStory.clickEditStory(storyName);
        edit.setNewDescription(description);
        edit.saveDescription();
        edit.clickCloseButton();
    }
}

module.exports = EditStory;