const assert = require('assert');
const expect = require('chai').expect;
const helper = require('../helpers/helper');
const credentials = require('../../environment').credentials;
const login= require('../pages/login.po');


describe('webdriver.io page', () => {

    it('Login to pivotal tracker', () => {
        let dashboard = login.loginAs(credentials.sysadmin.username, credentials.sysadmin.password);
        let createProjectModal = dashboard.clickCreateProjectButton();

        let project = {
            'Name' : helper.getRandomString(20),
            'Account' : 'None',
            'Privacy' : 'public'
        };
        createProjectModal.fillForm(project);
        let projectHeader = createProjectModal.clickCreateButton();



        browser.pause(5000);

        expect(project.Name).to.equal(projectHeader.getProjectName());
    });
});