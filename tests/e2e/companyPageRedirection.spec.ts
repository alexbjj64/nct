import Dashboard from "../common/pages/Dashboard";
import EmployersList from "../common/pages/EmployersList";

let dashboard: Dashboard = new Dashboard();
let employersList: EmployersList = new EmployersList();

const COMPANY_NAME: string = 'Новые Облачные Технологии';
const COMPANY_NAME_PART: string = 'новые облачные';
const RESULT_COUNT: number = 1;

describe('Redirection to the selected in dropdown company page feature:', () => {
    beforeEach(() => {
        dashboard.pageOperations.open();
        dashboard.pageOperations.expectIsLoaded();
        dashboard.navBar.searchTypeSelectButton.click();
        dashboard.navBar.searchSelectOptions.elementClick('Компании');
        dashboard.navBar.searchField.sendKeys(COMPANY_NAME_PART);
        dashboard.navBar.searchButton.click();
        employersList.pageOperations.expectIsLoaded();
    });

    it('table on the employers list page contains only one company containing name COMPANY_NAME', () => {
        employersList.employersListTable.employersListElements.expectElementsCountEqualsTo(RESULT_COUNT);
        employersList.employersListTable.employersListElements.expectElementsContainText(COMPANY_NAME_PART);
    });
});
