const {url} = require('../../environment');
const commonActions = require('../core/CommonActions');
const Dashboard = require('../pages/dashboard.po');
class Login {

    constructor() {
        this.usernameTextField = '#credentials_username';
        this.passwordTextField = '#credentials_password';
        this.nextButton = 'input[value=\'NEXT\']';
        this.signinButton = 'input[value=\'SIGN IN\']';
        this.profileDropdown = 'button[aria-label=\'Profile Dropdown\']';
        this.signoutButton = 'data-aid=\'ProfileDropdown__signout\'';
        this.useDifferentAccount = 'data-aid=\'different_account_link\'';
    }
    setUsernameTextField(username) {
        commonActions.setValue(this.usernameTextField, username);
    }

    setPasswordTextField(username) {
        commonActions.setValue(this.passwordTextField, username);
    }

    clickNextButton() {
        commonActions.click(this.nextButton);
    }

    clickSignInButton() {
        if(commonActions.waitForVisible(this.signinButton)) {
            commonActions.click(this.signinButton);
        } else {
            commonActions.click(this.useDifferentAccount);
            commonActions.click(this.signinButton);
        }
    }

    clickProfileDropdown() {
        commonActions.click(this.profileDropdown);
    }

    clickSignoutButton() {
        commonActions.click(this.signoutButton);
    }

    static loginAs(username, password) {
        let login = new Login();
        browser.url(url);
        commonActions.waitForVisible('.signin_page');
        login.setUsernameTextField(username);
        login.clickNextButton();
        login.setPasswordTextField(password);
        login.clickSignInButton();
        return new Dashboard();
    }

    static logout() {
        let login = new Login();
        login.clickProfileDropdown();
        login.clickSignoutButton();
    }
}
module.exports = Login;