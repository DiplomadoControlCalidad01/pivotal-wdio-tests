const commonActinos = require('../core/CommonActions')
class Login {
    setUsernameTextField(username) {
        commonActinos.setValue('#credentials_username', username);
    }

    setPasswordTextField(username) {
        commonActinos.setValue('#credentials_password', username);
    }

    nextButton() {
        commonActinos.click('input[value=\'NEXT\']');
    }

    signinButton() {
        commonActinos.click('input[value=\'SIGN IN\']');
    }

    static loginAs(username, password) {
        let login = new Login();
        login.setUsernameTextField(username);
        login.nextButton();
        login.setPasswordTextField(password);
        login.signinButton();
    }
}
module.exports = Login;