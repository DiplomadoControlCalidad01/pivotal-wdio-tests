const assert = require('assert');
const commonActions = require('../core/CommonActions');
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
            'Name' : 'another test3',
            'Account' : 'None',
            'Privacy' : 'public'
        };
        createProjectModal.fillForm(project);
        createProjectModal.clickCreateButton();

        commonActions.waitForInvisible('div[data-aid="modal-content"]');
        browser.pause(20000);
    });

});