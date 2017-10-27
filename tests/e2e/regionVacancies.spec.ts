import Dashboard from "../common/pages/Dashboard";
import EmployersList from "../common/pages/EmployersList";
import Employer from "../common/pages/Employer";

let dashboard: Dashboard = new Dashboard();
let employersList: EmployersList = new EmployersList();
let employer: Employer = new Employer();
let data = require('../test_data/data.json')['regionVacancies.spec'];

const COMPANY_NAME: string = data['COMPANY_NAME'];
const COMPANY_NAME_PART: string = data['COMPANY_NAME_PART'];
const VACANCIES_COUNT: number = data['VACANCIES_COUNT'];
const VACANCY: string = data['VACANCY'];
const COMPANIES_TYPE: string = data['COMPANIES_TYPE'];

describe('Redirection to the company page:', () => {
    beforeEach(() => {
        dashboard.pageOperations.open();
        dashboard.pageOperations.expectIsLoaded();
        dashboard.navBar.searchTypeSelectButton.click();
        dashboard.navBar.searchSelectOptions.elementClick(COMPANIES_TYPE);
        dashboard.navBar.searchField.sendKeys(COMPANY_NAME_PART);
        dashboard.navBar.searchButton.click();
        employersList.pageOperations.expectIsLoaded();
        employersList.employersListTable.employersListElements.elementClick(COMPANY_NAME);
        employer.pageOperations.expectIsLoaded();
    });

    it('vacancies count equal to VACANCIES_COUNT', () => {
        employer.vacanciesPad.vacanciesCountAll.expectIsCorrect(VACANCIES_COUNT.toString());
    });

    it('vacancies contain VACANCY', () => {
        employer.vacanciesPad.itVacanciesButton.click();
        employer.vacanciesPad.itVacanciesContainer.expectIsVisible();
        employer.vacanciesPad.vacanciesElements.expectElementContainsTextExist(VACANCY);
    });
});
