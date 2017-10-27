import Dashboard from "../common/pages/Dashboard";
import EmployersList from "../common/pages/EmployersList";

let dashboard: Dashboard = new Dashboard();
let employersList: EmployersList = new EmployersList();
let isPageOpened = false;
let data = require('../test_data/data.json')['employersList.navBar.searchPad.spec'];

const SEARCH_TYPE: string = data['SEARCH_TYPE'];
const DEFAULT_PLACEHOLDER: string = data['DEFAULT_PLACEHOLDER'];
const COMPANY_NAME_PART: string = data['COMPANY_NAME_PART'];


describe('Employers List page. Employers List Table: ', () => {
    beforeEach(() => {
        if (!isPageOpened) {
            dashboard.pageOperations.open();
            dashboard.pageOperations.expectIsLoaded();
            dashboard.navBar.searchTypeSelectButton.click();
            dashboard.navBar.searchSelectOptions.elementClick(SEARCH_TYPE);
            dashboard.navBar.searchField.sendKeys(COMPANY_NAME_PART);
            dashboard.navBar.searchButton.click();
            employersList.pageOperations.expectIsLoaded();
            isPageOpened = true;
        }
    });

    it('should be visible nav bar container', () => {
        employersList.navBar.navBarContainer.expectIsVisible();
    });

    it('should be visible nav bar`s search pad container', () => {
        employersList.navBar.searchPadContainer.expectIsVisible();
    });

    it('should be visible nav bar`s search field', () => {
        employersList.navBar.searchField.expectIsVisible();
    });

    it('should be nav bar`s search field containing search query', () => {
        employersList.navBar.searchField.expectIsValueCorrect(COMPANY_NAME_PART);
    });

    it('should be expected placeholder in nav bar`s search field', () => {
        employersList.navBar.searchField.expectIsCorrectPlaceholder(DEFAULT_PLACEHOLDER);
    });

    it('should be visible nav bar`s search button', () => {
        employersList.navBar.searchButton.expectIsVisible();
    });

    it('should be visible nav bar`s search type select button', () => {
        employersList.navBar.searchTypeSelectButton.expectIsVisible();
    });

    it('should be expected default value text of nav bar`s search type select button', () => {
        employersList.navBar.searchTypeSelectButton.expectIsSelectedValueCorrect(SEARCH_TYPE);
    });
});
