const assert = require('assert');
const commonActions = require('../../CommonActions');
const credentials = require('../../environment').credentials;
const login= require('../pages/login.po');
const story= require('../pages/story.po');


describe('webdriver.io page', () => {

    it('should have the right title - the fancy generator way', () => {
        browser.url('https://www.pivotaltracker.com/signin');
        var title = browser.getTitle();
        assert.equal(title, 'Pivotal Tracker - Sign in');
    });

    it('Login to pivotal tracker', () => {
        let dashboard = login.loginAs(credentials.sysadmin.username, credentials.sysadmin.password);
        let createProjectModal = dashboard.clickCreateProjectButton();

        let project = {
            'Name' : 'another test',
            'Account' : 'None',
            'Privacy' : 'public'
        };
        createProjectModal.fillForm(project);
        createProjectModal.clickCreateButton();

        commonActions.waitForInvisible('div[data-aid="modal-content"]');
    });

    it('Add user storie', () => {
        let dashboard = login.loginAs(credentials.sysadmin.username, credentials.sysadmin.password);
        story.addStory(storyName);
        let element = commonActions.getValue('//span[contains(text(), \'My us\')]');
        assert.equal(storyName, element);

    });
});