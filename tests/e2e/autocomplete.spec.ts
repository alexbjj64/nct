import Dashboard from "../common/pages/Dashboard";
import Random from "../common/utils/Random";
import {browser, protractor} from "protractor";

let dashboard: Dashboard = new Dashboard();
let random: Random = new Random();

const COMPANY_NAME: string = 'Новые Облачные Технологии';
const COMPANY_NAME_PART: string = 'новые облачные';
const resultsCount: number = 1;
const ENTERED_VALUE: string = COMPANY_NAME.substring(0, random.randomIntegerInRange(2, COMPANY_NAME.length));

describe('Autocomplete feature of search pad`s search field on the Dashboard pageOperations:', () => {
    beforeEach(() => {
        dashboard.pageOperations.open();
        dashboard.pageOperations.expectIsLoaded();
    });

    //pending due to defect of non ability to search 'новые облачные' in Companies
    xit('all the results from dropdown type Companies selected contain recently entered text', () => {
        dashboard.navBar.searchTypeSelectButton.click();
        dashboard.navBar.searchSelectOptions.elementClick('Компании');
        dashboard.navBar.searchField.sendKeys(ENTERED_VALUE);
        dashboard.navBar.searchDropdownElements.expectElementsContainText(ENTERED_VALUE);
    });

    it('all the results from dropdown type Vacancies selected contain recently entered text', () => {
        dashboard.navBar.searchTypeSelectButton.click();
        dashboard.navBar.searchSelectOptions.elementClick('Вакансии');
        dashboard.navBar.searchField.sendKeys(ENTERED_VALUE);
        dashboard.navBar.searchDropdownElements.expectElementsContainText(ENTERED_VALUE);
    });

    //pending due to defect of non ability to search 'новые облачные' in Companies
    xit('entering `новые облачные` in search input type Vacancies selected triggers `Новые Облачные Технологии` in search dropdown', () => {
        dashboard.navBar.searchTypeSelectButton.click();
        dashboard.navBar.searchSelectOptions.elementClick('Компании');
        dashboard.navBar.searchField.sendKeys(COMPANY_NAME_PART);
        dashboard.navBar.searchDropdown.expectIsVisible();
        dashboard.navBar.searchDropdownElements.expectElementsCountEqualsTo(resultsCount);
        dashboard.navBar.searchDropdownElements.expectElementsContainText(COMPANY_NAME);
    });

    it('entering `новые облачные` in search input type Vacancies selected triggers `Новые Облачные Технологии` in search dropdown', () => {
        dashboard.navBar.searchTypeSelectButton.click();
        dashboard.navBar.searchSelectOptions.elementClick('Вакансии');
        dashboard.navBar.searchField.sendKeys(COMPANY_NAME_PART);
        dashboard.navBar.searchDropdown.expectIsVisible();
        dashboard.navBar.searchDropdownElements.expectElementsCountEqualsTo(resultsCount);
        dashboard.navBar.searchDropdownElements.expectElementsContainText(COMPANY_NAME);
    });

    //pending due to defect of non ability to search 'новые облачные' in Companies
    xit('all the results from dropdown are refreshed during sequential input of text to contain entered text', () => {
        let expectedResult: string = '';
        dashboard.navBar.searchTypeSelectButton.click();
        dashboard.navBar.searchSelectOptions.elementClick('Компании');
        for (let char of COMPANY_NAME) {
            expectedResult += char;
            dashboard.navBar.searchField.sendKeys(char);
            if (expectedResult.length > 1) {
                browser.sleep(500); // to avoid stale element reference exception, param time related to requirements
                dashboard.navBar.searchDropdownElements.expectElementsContainText(expectedResult.trim());
            } else {
                dashboard.navBar.searchDropdown.expectIsNotPresent();
            }
        }
    });

    //pending due to defect of non ability to search 'новые облачные' in Companies
    xit('all the results from dropdown are refreshed during sequential removing of input text to contain entered text', () => {
        let expectedResult: string = COMPANY_NAME;
        dashboard.navBar.searchTypeSelectButton.click();
        dashboard.navBar.searchSelectOptions.elementClick('Компании');
        dashboard.navBar.searchField.sendKeys(expectedResult);
        dashboard.navBar.searchDropdownElements.expectElementsContainText(expectedResult.trim());
        for (let i = 0; i < COMPANY_NAME.length; i++) {
            expectedResult = expectedResult.slice(0,-1);
            dashboard.navBar.searchField.sendKeys(protractor.Key.BACK_SPACE);
            if (expectedResult.length > 1) {
                browser.sleep(500); // to avoid stale element reference exception, param time related to requirements
                dashboard.navBar.searchDropdownElements.expectElementsContainText(expectedResult.trim());
            } else {
                dashboard.navBar.searchDropdown.expectIsNotPresent();
            }
        }
    });

    it('all the results from dropdown are refreshed during sequential input of text to contain entered text', () => {
        let expectedResult: string = '';
        dashboard.navBar.searchTypeSelectButton.click();
        dashboard.navBar.searchSelectOptions.elementClick('Вакансии');
        for (let char of COMPANY_NAME) {
            expectedResult += char;
            dashboard.navBar.searchField.sendKeys(char);
            if (expectedResult.length > 1) {
                browser.sleep(500); // to avoid stale element reference exception, param time related to requirements
                dashboard.navBar.searchDropdownElements.expectElementsContainText(expectedResult.trim());
            } else {
                dashboard.navBar.searchDropdown.expectIsNotPresent();
            }
        }
    });

    it('all the results from dropdown are refreshed during sequential removing of input text to contain entered text', () => {
        let expectedResult: string = COMPANY_NAME;
        dashboard.navBar.searchTypeSelectButton.click();
        dashboard.navBar.searchSelectOptions.elementClick('Вакансии');
        dashboard.navBar.searchField.sendKeys(expectedResult);
        dashboard.navBar.searchDropdownElements.expectElementsContainText(expectedResult.trim());
        for (let i = 0; i < COMPANY_NAME.length; i++) {
            expectedResult = expectedResult.slice(0,-1);
            dashboard.navBar.searchField.sendKeys(protractor.Key.BACK_SPACE);
            if (expectedResult.length > 1) {
                browser.sleep(500); // to avoid stale element reference exception, param time related to requirements
                dashboard.navBar.searchDropdownElements.expectElementsContainText(expectedResult.trim());
            } else {
                dashboard.navBar.searchDropdown.expectIsNotPresent();
            }
        }
    });
});
