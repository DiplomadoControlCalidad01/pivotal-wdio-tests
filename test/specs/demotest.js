var assert = require('assert');
const credentials = require('../../environment').credentials;
const commonActions= require('../core/CommonActions');
const login= require('../pages/login.po');


describe('webdriver.io page', () => {

    it('should have the right title - the fancy generator way', () => {
        browser.url('https://www.pivotaltracker.com/signin');
        var title = browser.getTitle();
        assert.equal(title, 'Pivotal Tracker - Sign in');
    });
    it('Login to pivotal tracker', () => {
        let dashboard =login.loginAs(credentials.sysadmin.username, credentials.sysadmin.password);
        let createProjectModal = dashboard.clickCreateProjectButton();
        createProjectModal.setProjectName('something else');
        createProjectModal.selectAccount('None');
        commonActions.click('input[name="project_type"][data-aid="private"]');
        createProjectModal.clickCreateButton();

        commonActions.waitForVisible('div[data-aid="modal-content"]', true);
        browser.pause(20000);
    });
});