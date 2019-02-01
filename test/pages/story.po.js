const commonActions = require('../core/CommonActions');
class Story{

    setStoryName(name) {
        commonActions.setValue('textarea[data-aid=name]', name);
    }

    saveStory() {
        commonActions.click('button[type=submit]');
    }

    selectProject(projectName) {
        let selector = projectName;
        commonActions.click(selector);
    }

    addStoryButton() {
        commonActions.click('a[data-aid=AddButton]');
    }

    static addStory(name) {
        let story = new Story();
        story.selectProject('//a[contains(text(), \'Demo Project\')]')
        story.addStoryButton();
        story.setStoryName(name);
        story.saveStory();

    }

}

module.exports = Story;