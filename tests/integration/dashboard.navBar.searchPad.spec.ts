import Dashboard from "../common/pages/Dashboard";

let dashboard: Dashboard = new Dashboard();
let isPageOpened = false;

const DEFAULT_SEARCH_TYPE = 'Вакансии';
const DEFAULT_PLACEHOLDER = 'Я ищу…';


describe('Dashboard page. Navigation bar. Search pad:', () => {
    beforeEach(() => {
        if (!isPageOpened) {
            dashboard.pageOperations.open();
            dashboard.pageOperations.expectIsLoaded();
            isPageOpened = true;
        }
    });

    it('should be visible nav bar container', () => {
        dashboard.navBar.navBarContainer.expectIsVisible();
    });

    it('should be visible nav bar`s search pad container', () => {
        dashboard.navBar.searchPadContainer.expectIsVisible();
    });

    it('should be visible nav bar`s search field', () => {
        dashboard.navBar.searchField.expectIsVisible();
    });

    it('should be empty nav bar`s search field', () => {
        dashboard.navBar.searchField.expectIsEmpty();
    });

    it('should be expected placeholder in nav bar`s search field', () => {
        dashboard.navBar.searchField.expectIsCorrectPlaceholder(DEFAULT_PLACEHOLDER);
    });

    it('should be visible nav bar`s search button', () => {
        dashboard.navBar.searchButton.expectIsVisible();
    });

    it('should be visible nav bar`s search type select button', () => {
        dashboard.navBar.searchTypeSelectButton.expectIsVisible();
    });

    it('should be expected default value text of nav bar`s search type select button', () => {
        dashboard.navBar.searchTypeSelectButton.expectIsSelectedValueCorrect(DEFAULT_SEARCH_TYPE);
    });
});
