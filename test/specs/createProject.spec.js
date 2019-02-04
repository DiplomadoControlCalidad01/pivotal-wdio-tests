const expect = require('chai').expect;
const helper = require('../helpers/helper');
const credentials = require('../../environment').credentials;
const login= require('../pages/login.po');
const projectHeader= require('../pages/projectHeader.po');

describe('Project Feature', () => {

    let projectName;
    let dashboard;

    before(() => {
        dashboard = login.loginAs(credentials.sysadmin.username, credentials.sysadmin.password);
        projectName = helper.getRandomString(20);
    });

    after(() => {
        login.logout();
    });

    it('#BVT Create a project on Pivotal Tracker', () => {
        let createProjectModal = dashboard.clickCreateProjectButton();
        let project = {
            'Name' : projectName,
            'Account' : 'None',
            'Privacy' : 'public'
        };
        createProjectModal.fillForm(project);
        createProjectModal.clickCreateButton();        
        expect(project.Name).to.equal(projectHeader.getProjectName());
        expect(project.Privacy).to.equal(projectHeader.getPrivacy());
    });
});