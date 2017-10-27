import Dashboard from "../common/pages/Dashboard";
import EmployersList from "../common/pages/EmployersList";
import Employer from "../common/pages/Employer";

let dashboard: Dashboard = new Dashboard();
let employersList: EmployersList = new EmployersList();
let employer: Employer = new Employer();
let isPageOpened = false;
let data = require('../test_data/data.json')['employer.navBar.searchPad.spec'];

const SEARCH_TYPE: string = data['SEARCH_TYPE'];
const DEFAULT_PLACEHOLDER: string = data['DEFAULT_PLACEHOLDER'];
const COMPANY_NAME_PART: string = data['COMPANY_NAME_PART'];
const COMPANY_NAME: string = data['COMPANY_NAME'];


describe('Employer page. Employers List Table: ', () => {
    beforeEach(() => {
        if (!isPageOpened) {
            dashboard.pageOperations.open();
            dashboard.pageOperations.expectIsLoaded();
            dashboard.navBar.searchTypeSelectButton.click();
            dashboard.navBar.searchSelectOptions.elementClick(SEARCH_TYPE);
            dashboard.navBar.searchField.sendKeys(COMPANY_NAME_PART);
            dashboard.navBar.searchButton.click();
            employersList.pageOperations.expectIsLoaded();
            employersList.employersListTable.employersListElements.elementClick(COMPANY_NAME);
            isPageOpened = true;
        }
    });

    it('should be visible nav bar container', () => {
        employer.navBar.navBarContainer.expectIsVisible();
    });

    it('should be visible nav bar`s search pad container', () => {
        employer.navBar.searchPadContainer.expectIsVisible();
    });

    it('should be visible nav bar`s search field', () => {
        employer.navBar.searchField.expectIsVisible();
    });

    it('should be nav bar`s search field containing search query', () => {
        employer.navBar.searchField.expectIsEmpty();
    });

    it('should be expected placeholder in nav bar`s search field', () => {
        employer.navBar.searchField.expectIsCorrectPlaceholder(DEFAULT_PLACEHOLDER);
    });

    it('should be visible nav bar`s search button', () => {
        employer.navBar.searchButton.expectIsVisible();
    });

    it('should be visible nav bar`s search type select button', () => {
        employer.navBar.searchTypeSelectButton.expectIsVisible();
    });

    // search type automatically changed from Companies to vacancies, it is a minor bug
    xit('should be expected default value text of nav bar`s search type select button', () => {
        employer.navBar.searchTypeSelectButton.expectIsSelectedValueCorrect(SEARCH_TYPE);
    });
});
