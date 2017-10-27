import Dashboard from "../common/pages/Dashboard";
import EmployersList from "../common/pages/EmployersList";
import Employer from "../common/pages/Employer";

let dashboard: Dashboard = new Dashboard();
let employersList: EmployersList = new EmployersList();
let employer: Employer = new Employer();

const COMPANY_NAME: string = 'Новые Облачные Технологии';
const COMPANY_NAME_PART: string = 'новые облачные';
const VACANCIES_COUNT: number = 9;
const VACANCY: string = 'QA Automation Engineer';

describe('Redirection to the company page:', () => {
    beforeEach(() => {
        dashboard.pageOperations.open();
        dashboard.pageOperations.expectIsLoaded();
        dashboard.navBar.searchTypeSelectButton.click();
        dashboard.navBar.searchSelectOptions.elementClick('Компании');
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
