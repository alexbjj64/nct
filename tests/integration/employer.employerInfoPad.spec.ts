import Dashboard from "../common/pages/Dashboard";
import EmployersList from "../common/pages/EmployersList";
import Employer from "../common/pages/Employer";

let dashboard: Dashboard = new Dashboard();
let employersList: EmployersList = new EmployersList();
let employer: Employer = new Employer();
let isPageOpened = false;
let data = require('../test_data/data.json')['employer.employerInfoPad.spec'];

const SEARCH_TYPE: string = data['SEARCH_TYPE'];
const COMPANY_NAME_PART: string = data['COMPANY_NAME_PART'];
const COMPANY_NAME: string = data['COMPANY_NAME'];
const HEADER: string = data['HEADER'];


describe('Employer page. Vacancies Pad: ', () => {
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

    it('company page with COMPANY_NAME', () => {
        employer.employerInfoPad.header.expectIsCorrect(HEADER);
    });

    it('company page with COMPANY_NAME', () => {
        employer.employerInfoPad.employerInfoPadContainer.expectIsVisible();
    });

    //TBD
});
