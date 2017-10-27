import {browser, protractor, ElementFinder, ElementArrayFinder} from "protractor";
let condition = protractor.ExpectedConditions;
let DEFAULT_CONDITION_TIMEOUT = 30000;

declare const allure: {
    _allure;
    startStep(s2: string);
    endStep(s2: string);
    createAttachment(message: string, p: () => Buffer, s2: string);
};

export default class CommonActions {

    // <editor-fold defaultstate="collapsed" desc="browser">
    public openPage(URL: string, pageName: string): void {
        browser.get(URL);
        this.log(pageName + ' pageOperations has been opened');
    }

    public refreshPage(pageName: string): void {
        browser.refresh();
        this.log(pageName + ' pageOperations has been refreshed');
    }
    // </editor-fold>

    // <editor-fold defaultstate="collapsed" desc="report">
    public log(message: string): void {
        browser.controlFlow().execute(() => {
            allure._allure.startStep(message);
            console.log(message);
            allure._allure.endStep('passed');
        });
    }

    public screenshot(message: string) {
        return browser.takeScreenshot()
            .then((png) => {
                allure.createAttachment(message, () => {
                    return new Buffer(png, 'base64');
                }, 'image/png')();
            });
    }
    // </editor-fold>

    // <editor-fold defaultstate="collapsed" desc="states">
    public isPresent(element: ElementFinder, logName: string): void {
        expect(element.isPresent()).toBeTruthy(logName + ' is not present');
    }

    public isNotPresent(element: ElementFinder, logName: string): void {
        expect(element.isPresent()).toBeFalsy(logName + ' is present but it should not be');
    }

    public isDisplayed(element: ElementFinder, logName: string): void {
        expect(element.isDisplayed()).toBeTruthy(logName + ' is not displayed');
    }

    public isNotDisplayed(element: ElementFinder, logName: string): void {
        expect(element.isDisplayed()).toBeFalsy(logName + ' is displayed but it should not be');
    }

    public isClickable(element: ElementFinder, logName: string): void {
        expect(condition.elementToBeClickable(element)).toBeTruthy(logName + ' is not clickable')
    }

    public isEmptyField(element: ElementFinder, logName: string): void {
        expect(element.getAttribute('value')).toEqual('', logName + ' is not empty');
    }

    public isTextEquals(element: ElementFinder, text: string, logName: string): void {
        expect(element.getText()).toEqual(text, logName + ' has incorrect text');
    }

    public isTextContains(element: ElementFinder, text: string, logName: string): void {
        expect(element.getText()).toContain(text, logName + ' has incorrect text');
    }

    public isTextContainsCaseInsensitive(element: ElementFinder, text: string, logName: string): void {
        element.getText()
            .then((txt) => {
                expect(txt.toLowerCase()).toContain(text.toLowerCase(), logName + ' has incorrect text');
            });
    }

    public isValueEquals(element: ElementFinder, text: string, logName: string): void {
        expect(element.getAttribute('value')).toEqual(text, logName + ' has incorrect value');
    }

    public isUrlEquals(url: string, logName: string): void {
        expect(browser.getCurrentUrl()).toEqual(url, logName + ' is not loaded');
    }

    public isUrlContains(url: string, logName: string): void {
        expect(browser.getCurrentUrl()).toContain(url, logName + ' is not loaded');
    }

    public isPlaceholderEquals(element: ElementFinder, placeholder: string, logName: string) {
        expect(element.getAttribute('placeholder')).toEqual(placeholder, logName + ' has incorrect value');
    }

    public isElementsCountEqualTo(elementsList: ElementArrayFinder, expectedCount: number, logName: string) {
        elementsList.count()
            .then((actualCount) => {
                expect(actualCount).toEqual(expectedCount, logName + ' has incorrect count of results');
            });
    }

    public isElementsCountGreaterThan(elementsList: ElementFinder[], expectedCount: number, logName: string) {
        expect(elementsList.length).toBeGreaterThan(expectedCount, logName + ' has count of results not greater than: ' + expectedCount);
    }
    // </editor-fold>

    // <editor-fold defaultstate="collapsed" desc="waits">
    waitUntilIsVisible(element) {
        let visibility = condition.visibilityOf(element);
        return browser.wait(visibility, DEFAULT_CONDITION_TIMEOUT, 'Element with locator '
            + element.locator() + ' is not visible');
    }

    waitUntilIsNotVisible(element) {
        let visibility = condition.invisibilityOf(element);
        return browser.wait(visibility, DEFAULT_CONDITION_TIMEOUT, 'Element with locator '
            + element.locator() + ' is visible but it should not be');
    }

    waitUntilIsClickable(element) {
        let clickability = condition.elementToBeClickable(element);
        return browser.wait(clickability, DEFAULT_CONDITION_TIMEOUT, 'Element with locator '
            + element.locator() + ' is not clickable');
    }

    waitUntilIsNotClickable(element) {
        let clickability = condition.not(condition.elementToBeClickable(element));
        return browser.wait(clickability, DEFAULT_CONDITION_TIMEOUT, 'Element with locator '
            + element.locator() + ' is clickable but it should not be');
    }

    waitUntilIsPresent(element) {
        let presentability = condition.presenceOf(element);
        return browser.wait(presentability, DEFAULT_CONDITION_TIMEOUT, 'Element with locator '
            + element.locator() + ' is not present');
    }

    waitUntilIsNotPresent(element) {
        let presentability = condition.not(condition.presenceOf(element));
        return browser.wait(presentability, DEFAULT_CONDITION_TIMEOUT, 'Element with locator '
            + element.locator() + ' is present but it should not be');
    }

    waitUntilTextOfElementEqualTo(element: ElementFinder, text: string) {
        let presentability = condition.textToBePresentInElement(element, text);
        return browser.wait(presentability, DEFAULT_CONDITION_TIMEOUT, 'Element with locator '
            + element.locator() + ' and text ' + text + ' is not present');
    }

    waitUntilTextOfElementContains(element: ElementFinder, text: string) {
        return browser.wait(() => {
            return element.getText()
                .then((elText) => {
                    return elText.toLowerCase().includes(text.toLowerCase());
                });
        }, DEFAULT_CONDITION_TIMEOUT, 'Element with locator ' + element.locator() + ' does not contain text ' + text);
    }

    waitForUrlToChangeTo(expectedUrl) {
        return browser.wait(() => {
            return browser.getCurrentUrl()
                .then((url) => {
                    return (url === expectedUrl);
                });
        }, DEFAULT_CONDITION_TIMEOUT, 'Url has not changed to "' + expectedUrl + '"');
    }
    // </editor-fold>

    // <editor-fold defaultstate="collapsed" desc="actions">
    public click(element: ElementFinder, elementName: string): void {
        element.click();
        this.log('Clicked on the element: ' + elementName);
    }

    public sendKeys(element: ElementFinder, elementName: string, text: string): void {
        element.sendKeys(text);
        this.log('Sent text: "' + text + '" to element: ' + elementName);
    }
    // </editor-fold>
}
