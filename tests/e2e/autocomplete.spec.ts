import Dashboard from "../common/pages/Dashboard";
import Random from "../common/utils/Random";
import {browser, protractor} from "protractor";

let dashboard: Dashboard = new Dashboard();
let random: Random = new Random();

const COMPANY_NAME: string = 'Новые Облачные Технологии';
const ENTERED_VALUE: string = COMPANY_NAME.substring(0, random.randomIntegerInRange(2, COMPANY_NAME.length));

describe('Autocomplete feaxture of search pad`s search field on the Dashboard pageOperations:', () => {
    beforeEach(() => {
        dashboard.pageOperations.open();
        dashboard.pageOperations.expectIsLoaded();
    });

    it('all the results from dropdown contain recently entered text', () => {
        dashboard.navbar.searchField.sendKeys(ENTERED_VALUE);
        dashboard.navbar.searchDropdown.expectElementsContainText(ENTERED_VALUE);
    });

    it('all the results from dropdown are refreshed during sequential input of text to contain entered text', () => {
        let expectedResult: string = '';
        for (let char of COMPANY_NAME) {
            expectedResult += char;
            dashboard.navbar.searchField.sendKeys(char);
            if (expectedResult.length > 1) {
                browser.sleep(500); // to avoid stale element reference exception, param time related to requirements
                dashboard.navbar.searchDropdown.expectElementsContainText(expectedResult.trim());
            } else {
                dashboard.navbar.searchDropdown.expectIsNotPresent();
            }
        }
    });

    it('all the results from dropdown are refreshed during sequential removing of input text to contain entered text', () => {
        let expectedResult: string = COMPANY_NAME;
        dashboard.navbar.searchField.sendKeys(expectedResult);
        dashboard.navbar.searchDropdown.expectElementsContainText(expectedResult.trim());
        for (let i = 0; i < COMPANY_NAME.length; i++) {
            expectedResult = expectedResult.slice(0,-1);
            dashboard.navbar.searchField.sendKeys(protractor.Key.BACK_SPACE);
            if (expectedResult.length > 1) {
                browser.sleep(500); // to avoid stale element reference exception, param time related to requirements
                dashboard.navbar.searchDropdown.expectElementsContainText(expectedResult.trim());
            } else {
                dashboard.navbar.searchDropdown.expectIsNotPresent();
            }
        }
    });
});
