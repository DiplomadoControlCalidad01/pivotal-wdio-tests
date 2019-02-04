const assert = require('assert');
const helper = require('../helpers/helper');
const commonActions = require('../core/CommonActions');
const credentials = require('../../environment').credentials;
const login= require('../pages/login.po');
const story= require('../pages/createStoryModal.po');
const editStory = require('../pages/editStoryModel.po');


describe('webdriver.io page', () => {
    let dashboard;
    let description;

    before(() => {
        dashboard = login.loginAs(credentials.sysadmin.username, credentials.sysadmin.password);
        description = helper.getRandomString(30);
    });

    after(() => {
        login.logout();
    });

    it('Edit user story', () => {
        dashboard.selectProject("test1");
        let storyName = helper.getRandomString(10);
        story.addStory(storyName);
        let description = helper.getRandomString(20);
        editStory(storyName, description);
        editStory.clickEditStory(storyName);
        let descriptionSelector = '//h4[contains(text(),"Description")]/following-sibling::div/child::span/child::p';
        let element = commonActions.getText(descriptionSelector);
        assert.equal(description, element);
    });
});