const assert = require('assert');
const helper = require('../helpers/helper');
const commonActions = require('../core/CommonActions');
const credentials = require('../../environment').credentials;
const login= require('../pages/login.po');
const story= require('../pages/createStoryModal.po');


describe('webdriver.io page', () => {

    let projectName;
    let dashboard;

    before(() => {
        dashboard = login.loginAs(credentials.sysadmin.username, credentials.sysadmin.password);
        projectName = helper.getRandomString(20);
    });

    after(() => {
        login.logout();
    });

    it('#BVT Add user story', () => {
        dashboard.selectProject("test1");
        let storyName = helper.getRandomString(10);
        story.addStory(storyName);
        let storySelector = commonActions.concatLocator('//span[contains(text(),"', storyName ,'")]');
        let element = commonActions.getText(storySelector);
        assert.equal(storyName, element);
    });
});