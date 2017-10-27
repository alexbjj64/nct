import Dashboard from "../common/pages/Dashboard";
import EmployersList from "../common/pages/EmployersList";

let dashboard: Dashboard = new Dashboard();
let employersList: EmployersList = new EmployersList();
let isPageOpened = false;

const COMPANY_NAME_PART: string = 'новые облачные';


describe('Employers List page. Employers List Table: ', () => {
    beforeEach(() => {
        if (!isPageOpened) {
            dashboard.pageOperations.open();
            dashboard.pageOperations.expectIsLoaded();
            dashboard.navBar.searchTypeSelectButton.click();
            dashboard.navBar.searchSelectOptions.elementClick('Компании');
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
