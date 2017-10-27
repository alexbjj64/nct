import Dashboard from "../common/pages/Dashboard";
import EmployersList from "../common/pages/EmployersList";
import Employer from "../common/pages/Employer";

let dashboard: Dashboard = new Dashboard();
let employersList: EmployersList = new EmployersList();
let employer: Employer = new Employer();
let isPageOpened = false;

const SEARCH_TYPE = 'Компании';
const COMPANY_NAME_PART: string = 'новые облачные';
const COMPANY_NAME: string = 'Новые Облачные Технологии';


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

    it('should be visible vacancies pad container', () => {
        employer.vacanciesPad.vacanciesPadContainer.expectIsVisible();
    });

    it('should be visible vacancies all button', () => {
        employer.vacanciesPad.vacanciesAllButton.expectIsVisible();
    });

    //TBD
});
