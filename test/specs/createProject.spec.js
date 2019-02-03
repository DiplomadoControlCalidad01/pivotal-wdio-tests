const expect = require('chai').expect;
const helper = require('../helpers/helper');
const credentials = require('../../environment').credentials;
const login= require('../pages/login.po');


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

    it('should have the right title', () => {
        let title = browser.getTitle();
        assert.equal(title, 'Dashboard - Pivotal Tracker');
    });

    it('#BVT Create project', () => {
        let createProjectModal = dashboard.clickCreateProjectButton();
        let project = {
            'Name' : projectName,
            'Account' : 'None',
            'Privacy' : 'public'
        };
        createProjectModal.fillForm(project);
        let projectHeader = createProjectModal.clickCreateButton();
        expect(project.Name).to.equal(projectHeader.getProjectName());
    });
});