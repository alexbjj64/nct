import Dashboard from "../common/pages/Dashboard";

let dashboard: Dashboard = new Dashboard();
let isPageOpened = false;

const DEFAULT_SEARCH_TYPE = 'Вакансии';
const DEFAULT_PLACEHOLDER = 'Я ищу…';


describe('Dashboard pageOperations. Navigation bar. Search pad:', () => {
    beforeEach(() => {
        if (!isPageOpened) {
            dashboard.pageOperations.open();
            dashboard.pageOperations.expectIsLoaded();
            isPageOpened = true;
        }
    });

    it('should be visible nav bar container', () => {
        dashboard.navbar.navBarContainer.expectIsVisible();
    });

    it('should be visible nav bar`s search pad container', () => {
        dashboard.navbar.searchPadContainer.expectIsVisible();
    });

    it('should be visible nav bar`s search field', () => {
        dashboard.navbar.searchField.expectIsVisible();
    });

    it('should be empty nav bar`s search field', () => {
        dashboard.navbar.searchField.expectIsEmpty();
    });

    it('should be expected placeholder in nav bar`s search field', () => {
        dashboard.navbar.searchField.expectIsCorrectPlaceholder(DEFAULT_PLACEHOLDER);
    });

    it('should be visible nav bar`s search button', () => {
        dashboard.navbar.searchButton.expectIsVisible();
    });

    it('should be visible nav bar`s search type select button', () => {
        dashboard.navbar.searchTypeSelectButton.expectIsVisible();
    });

    it('should be expected default value text of nav bar`s search type select button', () => {
        dashboard.navbar.searchTypeSelectButton.expectIsSelectedValueCorrect(DEFAULT_SEARCH_TYPE);
    });
});
