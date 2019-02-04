const expect = require('chai').expect;

const {credentials} = require('../../environment');

const Login = require('../pages/login.po');
const ObjectCreator = require('../actions/objectCreator');
const helper = require('../helpers/helper');
const ProjectNav = require('../pages/projectNav.po');
const projectHeader= require('../pages/projectHeader.po');


describe('Project Feature', () => {

    beforeEach(() => {
        let dashboard = Login.loginAs(credentials.sysadmin.username,
            credentials.sysadmin.password);
        let project = {
            'Name' : helper.getRandomString(20),
            'Account' : 'qwe',
            'Privacy' : 'private'
        };
        ObjectCreator.createProject(project);
    });

    it('#Acceptance Edit a Project', () => {
        let settingsForm = ProjectNav.clickMore();        
        let editedProject = {
            'Account' : 'qwe (ID: 1074751 Owner: henry benito)',
            'Name' : helper.getRandomString(20),            
            'Privacy' : 'public'
        };
        settingsForm.editSettings(editedProject);        
        settingsForm.clickFormSaveButton();
        browser.pause(5000); //remove when wait for visible alert is implemented
        browser.alertAccept();
        
        expect(editedProject.Name).to.equal(projectHeader.getProjectName());
        expect(editedProject.Privacy).to.equal(projectHeader.getPrivacy());
    });

    it('#Acceptance Delete a Project', () => {
        let settingsForm = ProjectNav.clickMore();                
        settingsForm.clickDeleteProjectLink();        
        let dashboard = settingsForm.clickConfirmDeleteProjectButton();     
        let expectedMessage = `${project.Name} was successfully deleted.`;   
        expect(expectedMessage).to.equal(dashboard.getMessage());
    });
});
