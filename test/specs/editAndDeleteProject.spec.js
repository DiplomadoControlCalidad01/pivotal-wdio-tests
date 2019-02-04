const expect = require('chai').expect;

const {credentials} = require('../../environment');

const Login = require('../pages/login.po');
const ObjectCreator = require('../actions/objectCreator');
const helper = require('../helpers/helper');
const ProjectNav = require('../pages/projectNav.po');


describe('Account Feature', () => {

    beforeEach(() => {
        let dashboard = Login.loginAs(credentials.sysadmin.username,
            credentials.sysadmin.password);
        let project = {
            'Name' : helper.getRandomString(20),
            'Account' : 'None',
            'Privacy' : 'public'
        };
        ObjectCreator.createProject(project);
    });

    it('Edit an Account', () => {
        let settingsForm = ProjectNav.clickMore();        
        let editedProject = {
            'Name' : helper.getRandomString(20),
            'Account' : 'None (ID: 1079168 Owner: testpt)',
            'Privacy' : 'public'
        };
        settingsForm.editSettings(editedProject);        
        //settingsForm.clickSaveButton();

        // expect(accountView.getNameText()).to.equal(editedAccount.Name);
        // expect(accountView.getPhoneText()).to.equal(editedAccount.Phone);

        // accountView.clickDetailsTab();
    });

    // it('Delete an Account', () => {
    //
    // });
});
