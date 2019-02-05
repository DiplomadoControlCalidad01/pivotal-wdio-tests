const commonActions = require('../core/CommonActions');
const Dashboard = require('../pages/dashboard.po');
class Header{

    constructor() {
        this.dashboardButton = 'img[alt="tracker logo"]';        
    }

    clickDashboard() {
        commonActions.click(this.dashboardButton);
        return new Dashboard();
    }
}
module.exports = new Header();