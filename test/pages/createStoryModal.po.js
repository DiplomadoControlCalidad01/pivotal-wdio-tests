const commonActions = require('../core/CommonActions');
class Story{

    setStoryName(name) {
        commonActions.setValue('textarea[data-aid=name]', name);
    }

    saveStory() {
        commonActions.click('button[type=submit]');
    }

    addStoryButton() {
        commonActions.click('a[data-aid=AddButton]');
    }

    static addStory(name) {
        let story = new Story();
        story.addStoryButton();
        story.setStoryName(name);
        story.saveStory();
    }
}

module.exports = Story;