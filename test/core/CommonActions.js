const {explicit} = require('../../environment').timeout;

class CommonActions {
    static setValue(locator, value) {
        browser.waitForVisible(locator, explicit);
        browser.element(locator).setValue(value);
    }

    static click(locator) {
        browser.waitForVisible(locator, explicit);
        browser.element(locator).click();
    }

    static waitForVisible(locator) {
<<<<<<< HEAD
        return browser.waitForVisible(locator, 30000);
=======
        browser.waitForVisible(locator, explicit);
>>>>>>> Adding support for docker
    }
    static waitForInvisible(locator) {
        browser.waitForVisible(locator, explicit, true);
    }

    static getText(locator) {
        browser.waitForVisible(locator, explicit);
        return browser.getText(locator);
    }

<<<<<<< HEAD
    static concatLocator(locator, value, closeLocator) {
        return locator.concat(value, closeLocator);
=======
    static select(locator, text) {
        browser.waitForVisible(locator, explicit);
        browser.selectByVisibleText(locator, text);
    }

    static check(locator) {
        browser.waitForVisible(locator, explicit);
        let isChecked = browser.getAttribute(locator, checked);
        if(isChecked == null)
            browser.click(locator);
    }

    static uncheck(locator) {
        browser.waitForVisible(locator, explicit);
        let isChecked = browser.getAttribute(locator, checked);
        if(isChecked != null)
            browser.click(locator);
>>>>>>> Updating code to Carlos classes
    }
}
module.exports = CommonActions;