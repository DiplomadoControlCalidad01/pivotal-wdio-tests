const assert = require('assert');
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
        browser.pause(20000);
    });
});