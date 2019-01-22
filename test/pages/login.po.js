const {url} = require('../../environment');
const commonActions = require('../core/CommonActions');
const Dashboard = require('../pages/dashboard.po');
class Login {

    constructor() {
        this.usernameTextField = '#credentials_username';
        this.passwordTextField = '#credentials_password';
        this.nextButton = 'input[value=\'NEXT\']';
        this.signinButton = 'input[value=\'SIGN IN\']';

        browser.url(url);
        commonActions.waitForVisible('.signin_page');
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
        commonActions.click(this.signinButton);
    }

    static loginAs(username, password) {
        let login = new Login();
        login.setUsernameTextField(username);
        login.clickNextButton();
        login.setPasswordTextField(password);
        login.clickSignInButton();
        return new Dashboard();
    }
}
module.exports = Login;