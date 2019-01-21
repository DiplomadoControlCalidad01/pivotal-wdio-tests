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
        login.loginAs(credentials.sysadmin.username, credentials.sysadmin.password);

        commonActions.waitForVisible('.Dashboard');

        commonActions.click('#create-project-button');
        commonActions.waitForVisible('div[data-aid="modal-content"]');

        commonActions.setValue('input[name=project_name]', 'test1');
        commonActions.click('div[data-aid="menu-header"]');
        commonActions.click('//div[contains(@class,"option-account-name") and(text()="None")]');
        commonActions.click('input[name="project_type"][data-aid="private"]');
        commonActions.click('button[data-aid="FormModal__submit"]');

        commonActions.waitForVisible('div[data-aid="modal-content"]', true);
        browser.pause(20000);
    });
});