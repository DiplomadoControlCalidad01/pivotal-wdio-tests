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
        return browser.waitForVisible(locator, explicit);
    }

    static waitForInvisible(locator) {
        browser.waitForVisible(locator, explicit, true);
    }

    static waitForLoading() {     
        let blocker = 'div[class *="scrim visible"]';
        let gralSpinner = 'div[class *="scrimVisible"]';
        let shortExplicit = explicit;
        if(explicit > 3000)
            shortExplicit = 3000; 
        browser.waitForVisible(blocker, shortExplicit);        
        browser.waitForVisible(gralSpinner, shortExplicit);        
        browser.waitForVisible(gralSpinner, explicit, true);
        browser.waitForVisible(blocker, explicit, true);
    }    

    static getText(locator) {
        browser.waitForVisible(locator, explicit);
        return browser.getText(locator);
    }

    static concatLocator(locator, value, closeLocator) {
        return locator.concat(value, closeLocator);
    }

    static select(locator, text) {
        browser.waitForVisible(locator, explicit);
        browser.selectByVisibleText(locator, text);
    }

    static check(locator) {
        browser.waitForVisible(locator, explicit);
        let isChecked = browser.getAttribute(locator, "checked");
        console.log(`is checked? ${isChecked}`);
        if(isChecked == null)
            browser.click(locator);
    }

    static uncheck(locator) {
        browser.waitForVisible(locator, explicit);
        let isChecked = browser.getAttribute(locator, "checked");
        if(isChecked != null)
            browser.click(locator);
    }

    static scroll(locator) {
        $(locator).scroll();        
    }
}
module.exports = CommonActions;