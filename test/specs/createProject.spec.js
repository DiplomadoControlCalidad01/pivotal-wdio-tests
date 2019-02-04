const expect = require('chai').expect;
const helper = require('../helpers/helper');
const credentials = require('../../environment').credentials;
const login= require('../pages/login.po');
const projectHeader= require('../pages/projectHeader.po');


<<<<<<< HEAD:test/specs/createProject.spec.js
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
=======
describe('Project Feature', () => {
    
    it('#BVT Create a project on Pivotal Tracker', () => {
        let dashboard = login.loginAs(credentials.sysadmin.username, credentials.sysadmin.password);
>>>>>>> Updating code to Carlos classes:test/specs/createProject.spec.js
        let createProjectModal = dashboard.clickCreateProjectButton();
        let project = {
            'Name' : projectName,
            'Account' : 'None',
            'Privacy' : 'public'
        };
        createProjectModal.fillForm(project);
<<<<<<< HEAD:test/specs/createProject.spec.js
        let projectHeader = createProjectModal.clickCreateButton();
=======
        createProjectModal.clickCreateButton();        
>>>>>>> Updating code to Carlos classes:test/specs/createProject.spec.js
        expect(project.Name).to.equal(projectHeader.getProjectName());
        expect(project.Privacy).to.equal(projectHeader.getPrivacy());
    });
});