const Header = require('../pages/header.po');

class Navigator {

    static navigateToDashboard() {
        return Header.clickDashboard();        
    }
}

module.exports = Navigator;