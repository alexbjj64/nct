import Dashboard from "../common/pages/Dashboard";
import EmployersList from "../common/pages/EmployersList";

let dashboard: Dashboard = new Dashboard();
let employersList: EmployersList = new EmployersList();
let isPageOpened = false;
let data = require('../test_data/data.json')['employersList.employersListTable.spec'];

const COMPANY_NAME_PART: string = data['COMPANY_NAME_PART'];
const COMPANIES_TYPE: string = data['COMPANIES_TYPE'];


describe('Employers List page. Employers List Table: ', () => {
    beforeEach(() => {
        if (!isPageOpened) {
            dashboard.pageOperations.open();
            dashboard.pageOperations.expectIsLoaded();
            dashboard.navBar.searchTypeSelectButton.click();
            dashboard.navBar.searchSelectOptions.elementClick(COMPANIES_TYPE);
            dashboard.navBar.searchField.sendKeys(COMPANY_NAME_PART);
            dashboard.navBar.searchButton.click();
            employersList.pageOperations.expectIsLoaded();
            isPageOpened = true;
        }
    });

    it('should be visible employers list table container', () => {
        employersList.employersListTable.employersListTableContainer.expectIsVisible();
    });

    it('should be visible employers list', () => {
        employersList.employersListTable.employersList.expectIsVisible();
    });
});
